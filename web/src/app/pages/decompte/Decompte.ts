import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './Decompte.html?style=./Decompte.scss';
import {Etat} from '@/app/services/rest';
import Api from '@/app/services/Api';
import Timeout = NodeJS.Timeout;
import Lodash from "lodash";

let INTERVAL_MAJ_DONNEES: number = 400;
let INTERVAL_MAJ_BUZZER: number = 900;
let CODE: number[] = [2,8,9,7,5,0,3,4,1,6];

@WithRender
@Component({})
export default class PageDecompte extends Vue {

    etat: Etat = new Etat();
    intervalMaj: Timeout;

    buzzer: HTMLAudioElement;
    intervalBuzzer: Timeout;
    code: number[] = [0,1,2,3,4,5,6,7,8,9];

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
        console.log('Chargement buzzer');
    }

    majDonnees(): void {
        Api.getEtat().then(r => {
            this.etat = r.data;
        });
    }

    jouerBuzzer(): void {
        if (this.etat.buzzerActif) {
            this.buzzer.play();
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
        return !this.etat.desarmer && !this.afficherArme;
    }
    get afficherDesarme(): boolean {
        return this.etat.desarmer;
    }
    get afficherArme(): boolean {
        return !this.etat.decompteEnCours && !this.afficherDesarme;
    }
    get afficherCode(): boolean {
        return this.etat.afficherCode;
    }

    ajouterCode(val: number): void {
        this.code = Lodash.pull(this.code, val);
        this.code.unshift(val)

        let estCodeEgual = (): boolean => {
            let ok = true
            this.code.forEach((v,i) => {
                console.log(CODE[i]);
                if (v != CODE[i]) {
                    ok = false;
                }
            });
            return ok;
        }

        if (estCodeEgual()) {
            clearInterval(this.intervalMaj);
            this.etat.desarmer = true;
            this.etat.afficherCode = false;
            this.etat.buzzerActif = false;
            this.etat.decompteEnCours = false;
        }
    }
}