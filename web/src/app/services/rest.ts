// Generated using typescript-generator version 2.1.406 on 2019-05-08 01:04:15.

export class Etat {
    dernierMiseAJour: number;
    secondeRestante: number;
    decompteAccelere: boolean;
    decompteEnCours: boolean;
    buzzerActif: boolean;
    desarmer: boolean;
    afficherCode: boolean;
}

export interface HttpClient<O> {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; options?: O; }): RestResponse<R>;
}

export class RestApplicationClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /etat
     * Java method: ca.sgstp.dafa.bombe.services.etat.ServiceEtat.getEtat
     */
    getEtat(options?: O): RestResponse<Etat> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`etat`, options: options });
    }

    /**
     * HTTP PUT /etat
     * Java method: ca.sgstp.dafa.bombe.services.etat.ServiceEtat.setEtat
     */
    setEtat(etat: Etat, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`etat`, data: etat, options: options });
    }

    /**
     * HTTP GET /application.wadl/{path}
     * Java method: org.glassfish.jersey.server.wadl.internal.WadlResource.getExternalGrammar
     */
    getExternalGrammar(path: string, options?: O): RestResponse<any> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`application.wadl/${path}`, options: options });
    }

    /**
     * HTTP GET /application.wadl
     * Java method: org.glassfish.jersey.server.wadl.internal.WadlResource.getWadl
     */
    getWadl(options?: O): RestResponse<any> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`application.wadl`, options: options });
    }
}

export type RestResponse<R> = Promise<Axios.GenericAxiosResponse<R>>;

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}


// Added by 'AxiosClientExtension' extension

import axios from "axios";
import * as Axios from "axios";

declare module "axios" {
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
