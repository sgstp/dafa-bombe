import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './Decompte.html?style=./Decompte.scss';
import {Etat} from '@/app/services/rest';
import Api from '@/app/services/Api';
import Timeout = NodeJS.Timeout;
import Lodash from "lodash";

let INTERVAL_MAJ_DONNEES: number = 400;
let INTERVAL_MAJ_BUZZER: number = 900;

@WithRender
@Component({})
export default class PageDecompte extends Vue {

    etat: Etat = new Etat();
    intervalMaj: Timeout;

    buzzer: HTMLAudioElement;
    intervalBuzzer: Timeout;

    created(): void {
        this.intervalMaj = setInterval(this.majDonnees, INTERVAL_MAJ_DONNEES);
        this.majDonnees();
    }

    destroyed(): void {
        clearInterval(this.intervalMaj);
        clearInterval(this.intervalBuzzer);
    }

    mounted(): void {
        this.buzzer = this.$refs.buzzer as HTMLAudioElement;
        this.intervalBuzzer = setInterval(this.jouerBuzzer, INTERVAL_MAJ_BUZZER);
    }

    majDonnees(): void {
        Api.getEtat().then(r => {
            this.etat = r.data;
        });
    }

    jouerBuzzer(): void {
        if (this.etat.buzzerActif) {
            this.buzzer.play().then();
        } else {
            this.buzzer.pause();
        }
    }

    get minuteRestante(): string {
        return Lodash.padStart(Math.floor(this.etat.secondeRestante/60).toString(),2,'0');
    }

    get secondeRestante(): string {
        return Lodash.padStart((this.etat.secondeRestante % 60).toString(),2,'0');
    }

    get afficherDecompte(): boolean {
        return !this.etat.desarmer;
    }
    get afficherDesarme(): boolean {
        return this.etat.desarmer;
    }
}