import Cookies from 'js-cookie';
import axios from 'axios';

const token = Cookies.get('id_token');
const baseHost = 'https://wslbackend.zkteco-wa.com/api/v1';
const subBaseHost = 'https://admin.zkteco-wa.com';

export const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

export const baseUrl = `${baseHost}`;
export const subBaseUrl = `${subBaseHost}`;

export default axios.create({
    baseUrl,
    headers: customHeaders
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
