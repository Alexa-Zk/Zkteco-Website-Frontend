import Cookies from 'js-cookie';
const token = Cookies.get('id_token');

export default function({ $axios, redirect }) {
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);
        if (code === 400) {
            redirect('/400');
        }
    });
    $axios.onRequest(config => {
        $axios.setHeader('Authorization', token )
    })
}
