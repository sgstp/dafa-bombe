import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './Connexion.html?style=./Connexion.scss';
import GlobalUtils from '@/app/utils/GlobalUtils';
import MessagePleinEcran from '@/app/components/message-plein-ecran/MessagePleinEcran';
import { InformationConnexion, Utilisateur } from '@/app/services/stel-apis';
import Config from '@/app/utils/Config';
import { storeUtilisateur } from '@/app/store';

declare var require: any;

@WithRender
@Component({
    components: { 'message-plein-ecran': MessagePleinEcran }
})
export default class PageConnexion extends Vue {
    schema: object;
    donnees: IDonnees = {
        nomUtilisateur: '',
        motDePasse: ''
    };

    chargement: boolean = false;
    erreurConnexion: boolean = false;

    created() {
        if (this.utilisateur.id > 0) {
            this.$router.push({ name: Config.pageApresConnexion });
        }

        GlobalUtils.mergeMessages(this, require('./Connexion.i18n'));
        GlobalUtils.setTitre(this, this.$t('menu.utilisateur.connexion'));

        this.schema = {
            groups: [
                {
                    legend: this.$t('connexion'),
                    fields: [
                        {
                            type: 'input',
                            label:  this.$t('utilisateur'),
                            required: true,
                            inputType: 'text',
                            placeholder: this.$t('utilisateur'),
                            model: 'nomUtilisateur'
                        },
                        {
                            type: 'input',
                            label: this.$t('motDePasse'),
                            required: true,
                            inputType: 'password',
                            placeholder: this.$t('motDePasse'),
                            model: 'motDePasse'
                        },
                        {
                            type: 'submit',
                            buttonText: this.$t('connexion'),
                            onSubmit: this.connexion
                        }
                    ]
                }
            ]
        };
    }

    get utilisateur(): Utilisateur {
        return storeUtilisateur.getUtilisateur();
    }

    get codeOrganisation(): string {
        return this.$t('codeOrganisation') + GlobalUtils.getInformationConnexion().codeOrganisation;
    }

    connexion() {
        // this.chargement = true;
        let info: InformationConnexion = {
            utilisateur: this.donnees.nomUtilisateur,
            motDePasse: this.donnees.motDePasse
        };

        storeUtilisateur.connexion(info)
        .then(r => {
            this.erreurConnexion = !r;
            if (r) {
                this.$router.push({ name: Config.pageApresConnexion });
            }
        });
    }
}

interface IDonnees {
    nomUtilisateur: string;
    motDePasse: string;
}
