import Cookies from 'js-cookie';
import axios from 'axios';

const token = Cookies.get('id_token');
const baseHost = "https://wslbackend.zkteco-wa.com/api/v1"

console.log(token)
export const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: token ? token: ''
};

export const baseUrl = `${baseHost}`;

export default axios.create({
    baseUrl,
    headers: customHeaders
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');
};
