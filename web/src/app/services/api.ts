import { AxiosRestApplicationClient } from '@/app/services/stel-apis';
import Axios, { AxiosInstance } from 'axios';
import { storeUtilisateur } from '../store';
import GlobalUtils from '@/app/utils/GlobalUtils';

let axiosInstance: AxiosInstance = Axios.create();
let api = new AxiosRestApplicationClient(GlobalUtils.getInformationConnexion().urlApi, axiosInstance);

// Ajout du token
axiosInstance.interceptors.request.use(
    req => {
        let token: string = storeUtilisateur.getToken();
        if (token != '') {
            req.headers['Authorization'] = 'Bearer ' + token;
        }
        req.headers['X-NOM-CLIENT'] = GlobalUtils.getInformationConnexion().codeOrganisation;
        return req;
    }
);

// // Attraper les erreurs
// axiosInstance.interceptors.response.use(
//     ServiceErreurs.axiosReponseSuccessIntercepteur,
//     ServiceErreurs.axiosReponseErreurIntercepteur
// )

export default api;
