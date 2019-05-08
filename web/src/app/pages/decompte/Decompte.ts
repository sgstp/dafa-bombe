import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './Decompte.html?style=./Decompte.scss';
import {Etat} from "@/app/services/rest";
import Api from "@/app/services/Api";

@WithRender
@Component({})
export default class PageDecompte extends Vue {
    etat: Etat;

    created(): void {
        Api.getEtat().then(r => {
            this.etat = r.data;
        })
    }
}
