import LoDash from 'lodash';
// Generated using typescript-generator version 2.1.406 on 2019-02-26 12:32:48.

export class EvenementConfigVente {
    id: number;
    idUtilisateur: number;
    idEvenement: number;
    nbNumeroHorsLigne: number;
    venteOuverte: boolean;
    demanderNom: InfoDemande;
    demanderTelephone: InfoDemande;
    demanderCourriel: InfoDemande;
    modeEnvoies: ModeEnvoie[];
    estDefaut: boolean;
}

export class ResultatSupression {
    nbRessourceSupprime: number;
}

export class Banque {
    utilisateur: Utilisateur;
    montantInitiale: number;
    depots: Depot[];
    totalVente: number;
    totalDepot: number;
}

export class ResultatAction {
    succes: boolean;
}

export class Forfait {
    id: number;
    libelle: string;
    prix: number;
    nbNumero: number;
    actif: boolean;
}

export class Evenement {
    id: number;
    titre: string;
    numeroLicense: string;
    textRecu: string;
    nbChiffreNumero: number;
    prefixNumero: string;
    totalVente: number;
    forfaits: Forfait[];
    version: number;
    afficherNomOrganisation: boolean;
    urlLogoHaut: string;
    urlLogoBas: string;
    montantDepart: number;
}

export class ParamRechercheEvenement {
    estActif: boolean;
}

export class NouvelleVente {
    numeroReference: string;
    dateVente: Date;
    client: Client;
    modeEnvoies: ModeEnvoie[];
    idNumeros: number[];
    idVendeur: number;
    idForfait: number;
}

export class ParamRechercheVente {
    numeroReference: string;
    numero: string;
}

export class ResultatActionReserverNumero extends ResultatAction {
    numeros: Numero[];
}

export class InformationConnexion {
    utilisateur: string;
    motDePasse: string;
}

export class ResultatActionConnexion extends ResultatAction {
    token: string;
    utilisateur: Utilisateur;
}

export class Utilisateur {
    id: number;
    prenom: string;
    nom: string;
    nomUtilisateur: string;
    motDePasse: string;
    idEvenementAssigne: number;
    actif: boolean;
    estGestionnaire: boolean;
}

export class ResultatCreation<T> {
    ressource: T;
}

export class ResultatModification<T> {
    ressource: T;
}

export class ResultatObtention<T> {
    ressource: T;
}

export class Depot {
    coupures: Coupure[];
    depotAutres: number;
    total: number;
    dateCreation: Date;
    identificationDepot: number;
}

export class ResultatRecherche<T> {
    ressource: T[];
}

export class VenteParVendeur {
    utilisateur: Utilisateur;
    detailsForfait: ForfaitNombre[];
    totalVente: number;
}

export class Gagnant {
    numero: Numero;
    horodateNumeroTire: Date;
    vente: Vente;
}

export class Client {
    nom: string;
    courriel: string;
    telephone: string;
}

export class Vente {
    id: number;
    numeroReference: string;
    annule: boolean;
    dateVente: Date;
    client: Client;
    modeEnvoies: ModeEnvoie[];
    numeros: Numero[];
    vendeur: Utilisateur;
    forfait: Forfait;
}

export class Numero {
    id: number;
    numero: string;
    dateTire: Date;
}

export class Organisation {
    nom: string;
    langue: string;
}

export class InformationCompilation {
    buildVersion: string;
}

export class DetailTV {
    id: number;
    nomEvenement: string;
    totalVente: number;
    numeroGagnant: string[];
}

export class Coupure {
    libelle: string;
    valeur: number;
    nombre: number;
    total: number;
}

export class ForfaitNombre {
    forfait: Forfait;
    nbVendu: number;
    total: number;
}

export interface HttpClient<O> {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; options?: O; }): RestResponse<R>;
}

export class RestApplicationClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP POST /evenements/{idevenement}/configvente/{idutilisateur}
     * Java method: ca.sgstp.stel.apis.evenement.configvente.ServiceConfigVente.creerConfigVente
     */
    creerConfigVente(idevenement: number, idutilisateur: number, evenementConfigVente: EvenementConfigVente, options?: O): RestResponse<ResultatCreation<EvenementConfigVente>> {
        return this.httpClient.request({ method: 'POST', url: uriEncoding`evenements/${idevenement}/configvente/${idutilisateur}`, data: evenementConfigVente, options: options });
    }

    /**
     * HTTP PUT /evenements/{idevenement}/configvente
     * Java method: ca.sgstp.stel.apis.evenement.configvente.ServiceConfigVente.modifierConfigVente
     */
    modifierConfigVente$PUT$evenements_idevenement_configvente(idevenement: number, evenementConfigVente: EvenementConfigVente, options?: O): RestResponse<ResultatModification<EvenementConfigVente>> {
        return this.httpClient.request({ method: 'PUT', url: uriEncoding`evenements/${idevenement}/configvente`, data: evenementConfigVente, options: options });
    }

    /**
     * HTTP PUT /evenements/{idevenement}/configvente/{idutilisateur}
     * Java method: ca.sgstp.stel.apis.evenement.configvente.ServiceConfigVente.modifierConfigVente
     */
    modifierConfigVente$PUT$evenements_idevenement_configvente_idutilisateur(idevenement: number, idutilisateur: number, evenementConfigVente: EvenementConfigVente, options?: O): RestResponse<ResultatModification<EvenementConfigVente>> {
        return this.httpClient.request({ method: 'PUT', url: uriEncoding`evenements/${idevenement}/configvente/${idutilisateur}`, data: evenementConfigVente, options: options });
    }

    /**
     * HTTP GET /evenements/{idevenement}/configvente/{idutilisateur}
     * Java method: ca.sgstp.stel.apis.evenement.configvente.ServiceConfigVente.obtenirConfigVente
     */
    obtenirConfigVente$GET$evenements_idevenement_configvente_idutilisateur(idevenement: number, idutilisateur: number, options?: O): RestResponse<ResultatObtention<EvenementConfigVente>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`evenements/${idevenement}/configvente/${idutilisateur}`, options: options });
    }

    /**
     * HTTP GET /evenements/{idevenement}/configvente
     * Java method: ca.sgstp.stel.apis.evenement.configvente.ServiceConfigVente.obtenirConfigVente
     */
    obtenirConfigVente$GET$evenements_idevenement_configvente(idevenement: number, options?: O): RestResponse<ResultatObtention<EvenementConfigVente>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`evenements/${idevenement}/configvente`, options: options });
    }

    /**
     * HTTP DELETE /evenements/{idevenement}/configvente/{idutilisateur}
     * Java method: ca.sgstp.stel.apis.evenement.configvente.ServiceConfigVente.supprimerConfigVente
     */
    supprimerConfigVente(idevenement: number, idutilisateur: number, options?: O): RestResponse<ResultatSupression> {
        return this.httpClient.request({ method: 'DELETE', url: uriEncoding`evenements/${idevenement}/configvente/${idutilisateur}`, options: options });
    }

    /**
     * HTTP PUT /evenements/{idevenement}/depots/{idutilisateur}
     * Java method: ca.sgstp.stel.apis.evenement.depot.ServiceDepot.modifierDepot
     */
    modifierDepot(idevenement: number, idutilisateur: number, banque: Banque, options?: O): RestResponse<ResultatAction> {
        return this.httpClient.request({ method: 'PUT', url: uriEncoding`evenements/${idevenement}/depots/${idutilisateur}`, data: banque, options: options });
    }

    /**
     * HTTP GET /evenements/{idevenement}/depots
     * Java method: ca.sgstp.stel.apis.evenement.depot.ServiceDepot.obtenirDepots
     */
    obtenirDepots(idevenement: number, options?: O): RestResponse<ResultatRecherche<Banque>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`evenements/${idevenement}/depots`, options: options });
    }

    /**
     * HTTP POST /evenements/{idevenement}/forfait
     * Java method: ca.sgstp.stel.apis.evenement.forfait.ServiceForfait.creerForfait
     */
    creerForfait(idevenement: number, forfait: Forfait, options?: O): RestResponse<ResultatCreation<Forfait>> {
        return this.httpClient.request({ method: 'POST', url: uriEncoding`evenements/${idevenement}/forfait`, data: forfait, options: options });
    }

    /**
     * HTTP PUT /evenements/{idevenement}/forfait/{idforfait}
     * Java method: ca.sgstp.stel.apis.evenement.forfait.ServiceForfait.modifierForfait
     */
    modifierForfait(idevenement: number, idforfait: number, forfait: Forfait, options?: O): RestResponse<ResultatModification<Forfait>> {
        return this.httpClient.request({ method: 'PUT', url: uriEncoding`evenements/${idevenement}/forfait/${idforfait}`, data: forfait, options: options });
    }

    /**
     * HTTP GET /evenements/{idevenement}/forfait/{idforfait}/nbvente
     * Java method: ca.sgstp.stel.apis.evenement.forfait.ServiceForfait.nbVenteParForfait
     */
    nbVenteParForfait(idevenement: number, idforfait: number, options?: O): RestResponse<ResultatObtention<number>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`evenements/${idevenement}/forfait/${idforfait}/nbvente`, options: options });
    }

    /**
     * HTTP DELETE /evenements/{idevenement}/forfait/{idforfait}
     * Java method: ca.sgstp.stel.apis.evenement.forfait.ServiceForfait.supprimerForfait
     */
    supprimerForfait(idevenement: number, idforfait: number, options?: O): RestResponse<ResultatSupression> {
        return this.httpClient.request({ method: 'DELETE', url: uriEncoding`evenements/${idevenement}/forfait/${idforfait}`, options: options });
    }

    /**
     * HTTP GET /evenements/{idevenement}/rapport/venteparvendeur
     * Java method: ca.sgstp.stel.apis.evenement.rapport.ServiceRapportEvenement.getVenteParVendeur
     */
    getVenteParVendeur(idevenement: number, options?: O): RestResponse<ResultatRecherche<VenteParVendeur>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`evenements/${idevenement}/rapport/venteparvendeur`, options: options });
    }

    /**
     * HTTP PUT /evenements/{idevenement}/archier
     * Java method: ca.sgstp.stel.apis.evenement.ServiceEvenement.archiverEvenement
     */
    archiverEvenement(idevenement: number, options?: O): RestResponse<ResultatAction> {
        return this.httpClient.request({ method: 'PUT', url: uriEncoding`evenements/${idevenement}/archier`, options: options });
    }

    /**
     * HTTP POST /evenements
     * Java method: ca.sgstp.stel.apis.evenement.ServiceEvenement.creerEvenement
     */
    creerEvenement(evenement: Evenement, options?: O): RestResponse<ResultatCreation<Evenement>> {
        return this.httpClient.request({ method: 'POST', url: uriEncoding`evenements`, data: evenement, options: options });
    }

    /**
     * HTTP PUT /evenements/{idevenement}
     * Java method: ca.sgstp.stel.apis.evenement.ServiceEvenement.modifierEvenement
     */
    modifierEvenement(idevenement: number, evenement: Evenement, options?: O): RestResponse<ResultatModification<Evenement>> {
        return this.httpClient.request({ method: 'PUT', url: uriEncoding`evenements/${idevenement}`, data: evenement, options: options });
    }

    /**
     * HTTP GET /evenements/{idevenement}
     * Java method: ca.sgstp.stel.apis.evenement.ServiceEvenement.obtenirEvenement
     */
    obtenirEvenement(idevenement: number, queryParams?: { format?: string; }, options?: O): RestResponse<ResultatObtention<Evenement>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`evenements/${idevenement}`, queryParams: queryParams, options: options });
    }

    /**
     * HTTP GET /evenements/{idevenement}/gagnants
     * Java method: ca.sgstp.stel.apis.evenement.ServiceEvenement.obtenirGagnants
     */
    obtenirGagnants(idevenement: number, options?: O): RestResponse<ResultatRecherche<Gagnant>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`evenements/${idevenement}/gagnants`, options: options });
    }

    /**
     * HTTP GET /evenements
     * Java method: ca.sgstp.stel.apis.evenement.ServiceEvenement.rechercherEvenement
     */
    rechercherEvenement(paramRechercheEvenement: ParamRechercheEvenement, queryParams?: { format?: string; }, options?: O): RestResponse<ResultatRecherche<Evenement>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`evenements`, queryParams: LoDash.assign({},queryParams,paramRechercheEvenement), options: options });
    }

    /**
     * HTTP PUT /evenements/{idevenement}/tirer
     * Java method: ca.sgstp.stel.apis.evenement.ServiceEvenement.tirerNumero
     */
    tirerNumero(idevenement: number, options?: O): RestResponse<ResultatAction> {
        return this.httpClient.request({ method: 'PUT', url: uriEncoding`evenements/${idevenement}/tirer`, options: options });
    }

    /**
     * HTTP PUT /evenements/{idevenement}/ventes/{idvente}/annuler
     * Java method: ca.sgstp.stel.apis.evenement.vente.ServiceVente.annulerVente
     */
    annulerVente(idevenement: number, idvente: number, options?: O): RestResponse<ResultatAction> {
        return this.httpClient.request({ method: 'PUT', url: uriEncoding`evenements/${idevenement}/ventes/${idvente}/annuler`, options: options });
    }

    /**
     * HTTP POST /evenements/{idevenement}/ventes
     * Java method: ca.sgstp.stel.apis.evenement.vente.ServiceVente.creerVente
     */
    creerVente(idevenement: number, vente: NouvelleVente, options?: O): RestResponse<ResultatCreation<Vente>> {
        return this.httpClient.request({ method: 'POST', url: uriEncoding`evenements/${idevenement}/ventes`, data: vente, options: options });
    }

    /**
     * HTTP GET /evenements/{idevenement}/ventes
     * Java method: ca.sgstp.stel.apis.evenement.vente.ServiceVente.rechercherVente
     */
    rechercherVente(idevenement: number, paramRechercheVente: ParamRechercheVente, options?: O): RestResponse<ResultatRecherche<Vente>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`evenements/${idevenement}/ventes`, queryParams: paramRechercheVente, options: options });
    }

    /**
     * HTTP POST /evenements/{idevenement}/ventes/reservernumero/{idutilisateur}
     * Java method: ca.sgstp.stel.apis.evenement.vente.ServiceVente.reserverNumero
     */
    reserverNumero(idevenement: number, idutilisateur: number, options?: O): RestResponse<ResultatActionReserverNumero> {
        return this.httpClient.request({ method: 'POST', url: uriEncoding`evenements/${idevenement}/ventes/reservernumero/${idutilisateur}`, options: options });
    }

    /**
     * HTTP POST /fichiers
     * Java method: ca.sgstp.stel.apis.fichier.ServiceFichier.envoyerFichier
     */
    envoyerFichier(inputStream: any, options?: O): RestResponse<ResultatCreation<string>> {
        return this.httpClient.request({ method: 'POST', url: uriEncoding`fichiers`, data: inputStream, options: options });
    }

    /**
     * HTTP GET /fichiers/{nomfichier}
     * Java method: ca.sgstp.stel.apis.fichier.ServiceFichier.getFichier
     */
    getFichier(nomfichier: string, options?: O): RestResponse<any> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`fichiers/${nomfichier}`, options: options });
    }

    /**
     * HTTP POST /journalisation/{idutilisateur}/majvente/{idevenement}
     * Java method: ca.sgstp.stel.apis.journalisation.ServiceJournalisation.enregistrerMajVente
     */
    enregistrerMajVente(idutilisateur: number, idevenement: number, options?: O): RestResponse<ResultatAction> {
        return this.httpClient.request({ method: 'POST', url: uriEncoding`journalisation/${idutilisateur}/majvente/${idevenement}`, options: options });
    }

    /**
     * HTTP POST /journalisation/{idutilisateur}/reimpressionvente/{idvente}
     * Java method: ca.sgstp.stel.apis.journalisation.ServiceJournalisation.enregistrerReimpressionVente
     */
    enregistrerReimpressionVente(idutilisateur: number, idvente: string, options?: O): RestResponse<ResultatAction> {
        return this.httpClient.request({ method: 'POST', url: uriEncoding`journalisation/${idutilisateur}/reimpressionvente/${idvente}`, options: options });
    }

    /**
     * HTTP GET /journalisation/{idutilisateur}/majvente/{idevenement}
     * Java method: ca.sgstp.stel.apis.journalisation.ServiceJournalisation.obtenirDerniereMajVente
     */
    obtenirDerniereMajVente(idutilisateur: number, idevenement: number, options?: O): RestResponse<Date> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`journalisation/${idutilisateur}/majvente/${idevenement}`, options: options });
    }

    /**
     * HTTP POST /journalisation/razls
     * Java method: ca.sgstp.stel.apis.journalisation.ServiceJournalisation.supressionLocalstorage
     */
    supressionLocalstorage(donneesEffaces: string, options?: O): RestResponse<ResultatAction> {
        return this.httpClient.request({ method: 'POST', url: uriEncoding`journalisation/razls`, data: donneesEffaces, options: LoDash.assign({ headers: { 'Content-Type': 'text/plain' } }, options) });
    }

    /**
     * HTTP GET /organisations
     * Java method: ca.sgstp.stel.apis.organisation.ServiceOrganisation.obtenirOrganisation
     */
    obtenirOrganisation(options?: O): RestResponse<ResultatObtention<Organisation>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`organisations`, options: options });
    }

    /**
     * HTTP GET /version
     * Java method: ca.sgstp.stel.apis.ServiceVersion.obtenirVersion
     */
    obtenirVersion(options?: O): RestResponse<ResultatObtention<InformationCompilation>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`version`, options: options });
    }

    /**
     * HTTP GET /tv/{codeorganisation}/{idevenement}
     * Java method: ca.sgstp.stel.apis.tv.ServiceTv.obtenirDetailTv
     */
    obtenirDetailTv$GET$tv_codeorganisation_idevenement(codeorganisation: string, idevenement: number, options?: O): RestResponse<ResultatRecherche<DetailTV>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`tv/${codeorganisation}/${idevenement}`, options: options });
    }

    /**
     * HTTP GET /tv/{codeorganisation}
     * Java method: ca.sgstp.stel.apis.tv.ServiceTv.obtenirDetailTv
     */
    obtenirDetailTv$GET$tv_codeorganisation(codeorganisation: string, options?: O): RestResponse<ResultatRecherche<DetailTV>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`tv/${codeorganisation}`, options: options });
    }

    /**
     * HTTP GET /tv/{codeorganisation}/{idevenement}/png
     * Java method: ca.sgstp.stel.apis.tv.ServiceTv.obtenirPngTv
     */
    obtenirPngTv$GET$tv_codeorganisation_idevenement_png(codeorganisation: string, idevenement: number, options?: O): RestResponse<any> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`tv/${codeorganisation}/${idevenement}/png`, options: options });
    }

    /**
     * HTTP GET /tv/{codeorganisation}/png
     * Java method: ca.sgstp.stel.apis.tv.ServiceTv.obtenirPngTv
     */
    obtenirPngTv$GET$tv_codeorganisation_png(codeorganisation: string, options?: O): RestResponse<any> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`tv/${codeorganisation}/png`, options: options });
    }

    /**
     * HTTP POST /utilisateurs/connexion
     * Java method: ca.sgstp.stel.apis.utilisateur.ServiceUtilisateur.connexion
     */
    connexion(informationConnexion: InformationConnexion, options?: O): RestResponse<ResultatActionConnexion> {
        return this.httpClient.request({ method: 'POST', url: uriEncoding`utilisateurs/connexion`, data: informationConnexion, options: options });
    }

    /**
     * HTTP POST /utilisateurs
     * Java method: ca.sgstp.stel.apis.utilisateur.ServiceUtilisateur.creerUtilisateur
     */
    creerUtilisateur(utilisateur: Utilisateur, options?: O): RestResponse<ResultatCreation<Utilisateur>> {
        return this.httpClient.request({ method: 'POST', url: uriEncoding`utilisateurs`, data: utilisateur, options: options });
    }

    /**
     * HTTP POST /utilisateurs/{idutilisateur}/deconnexion
     * Java method: ca.sgstp.stel.apis.utilisateur.ServiceUtilisateur.deconnexion
     */
    deconnexion(idutilisateur: number, options?: O): RestResponse<ResultatAction> {
        return this.httpClient.request({ method: 'POST', url: uriEncoding`utilisateurs/${idutilisateur}/deconnexion`, options: options });
    }

    /**
     * HTTP PUT /utilisateurs/{idutilisateur}
     * Java method: ca.sgstp.stel.apis.utilisateur.ServiceUtilisateur.modifierUtilisateur
     */
    modifierUtilisateur(idutilisateur: number, utilisateur: Utilisateur, options?: O): RestResponse<ResultatModification<Utilisateur>> {
        return this.httpClient.request({ method: 'PUT', url: uriEncoding`utilisateurs/${idutilisateur}`, data: utilisateur, options: options });
    }

    /**
     * HTTP GET /utilisateurs
     * Java method: ca.sgstp.stel.apis.utilisateur.ServiceUtilisateur.obternirUtilisateursActif
     */
    obternirUtilisateursActif(options?: O): RestResponse<ResultatRecherche<Utilisateur>> {
        return this.httpClient.request({ method: 'GET', url: uriEncoding`utilisateurs`, options: options });
    }
}

export type RestResponse<R> = Promise<Axios.GenericAxiosResponse<R>>;

export type InfoDemande = 'NON' | 'OUI' | 'OBLIGATOIRE';

export type ModeEnvoie = 'IMPRESSION' | 'COURRIEL' | 'SMS';

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = '';
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}

// Added by 'AxiosClientExtension' extension

import axios from 'axios';
import * as Axios from 'axios';

declare module 'axios' {
    export interface GenericAxiosResponse<R> extends Axios.AxiosResponse {
        data: R;
    }
}

class AxiosHttpClient implements HttpClient<Axios.AxiosRequestConfig> {

    constructor(private axios: Axios.AxiosInstance) {
    }

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; options?: Axios.AxiosRequestConfig; }): RestResponse<R> {
        function assign(target: any, source?: any) {
            if (source != undefined) {
                for (const key in source) {
                    if (source.hasOwnProperty(key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        }

        const config: Axios.AxiosRequestConfig = {};
        config.method = requestConfig.method;
        config.url = requestConfig.url;
        config.params = requestConfig.queryParams;
        config.data = requestConfig.data;
        assign(config, requestConfig.options);
        const copyFn = requestConfig.copyFn;

        const axiosResponse = this.axios.request(config);
        return axiosResponse.then(axiosResponse => {
            if (copyFn && axiosResponse.data) {
                (axiosResponse as any).originalData = axiosResponse.data;
                axiosResponse.data = copyFn(axiosResponse.data);
            }
            return axiosResponse;
        });
    }
}

export class AxiosRestApplicationClient extends RestApplicationClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
