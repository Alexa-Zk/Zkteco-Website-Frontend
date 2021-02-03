import Cookies from 'js-cookie';

export default function({ $axios, redirect }) {
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);
        if (code === 400) {
            redirect('/400');
        }
    });
    $axios.onRequest(config => {
        console.log(config)
    })
}
