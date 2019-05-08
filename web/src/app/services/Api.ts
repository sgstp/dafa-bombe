import { AxiosRestApplicationClient } from '@/app/services/rest';
import Axios, { AxiosInstance } from 'axios';
import Config from '@/app/utils/Config';

let axiosInstance: AxiosInstance = Axios.create();
let Api = new AxiosRestApplicationClient(Config.urlApi, axiosInstance);

export default Api;
