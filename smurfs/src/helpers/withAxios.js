import axios from 'axios';

export default function withAxios() {
    return axios.create({
        baseURL: 'http://localhost:3333',
    });
}
