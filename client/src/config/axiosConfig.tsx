import axios from "axios";

const baseUrl: string = 'https://localhost:7067/api/';

const axiosLocalInstance: any = axios.create({
    baseURL: baseUrl,
});

export default axiosLocalInstance;