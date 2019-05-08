import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './Admin.html?style=./Admin.scss';
import { Etat } from '@/app/services/rest';
import Api from '@/app/services/Api';
import Config from '@/app/utils/Config';

@WithRender
@Component({})
export default class PageAdmin extends Vue {

    etat: Etat = new Etat();
    etatChamps: any = {
        groups: [
            {
                legend: 'Admin',
                fields: [
                    {
                        type: 'checkbox',
                        label:  'decompteEnCours',
                        model: 'decompteEnCours'
                    }, {
                        type: 'checkbox',
                        label:  'buzzerActif',
                        model: 'buzzerActif'
                    }, {
                        type: 'checkbox',
                        label:  'decompteAccelere',
                        model: 'decompteAccelere'
                    }, {
                        type: 'checkbox',
                        label:  'afficherCode',
                        model: 'afficherCode'
                    }, {
                        type: 'checkbox',
                        label:  'desarmer',
                        model: 'desarmer'
                    }, {
                        type: 'submit',
                        buttonText: 'OK',
                        onSubmit: this.envoyerDonnees
                    }, {
                        type: 'submit',
                        buttonText: 'Recharger',
                        onSubmit: this.majDonnees
                    }, {
                        type: 'input',
                        inputType: 'number',
                        label:  'secondeRestante',
                        model: 'secondeRestante'
                    }, {
                        type: 'submit',
                        buttonText: 'MAJ Temps',
                        onSubmit: this.envoyerDonneesTemps
                    }
                ]
            }
        ]
    };

    created(): void {
        this.majDonnees();
    }

    majDonnees(): void {
        Api.getEtat().then(r => {
            this.etat = r.data;
        });
    }

    envoyerDonnees(): void {
        Api.setEtat(this.etat);
    }

    envoyerDonneesTemps(): void {
        Api.setEtatTemps(this.etat);
    }

    get codeDesarmement(): number[] {
        return Config.codeDesarmement;
    }
}
