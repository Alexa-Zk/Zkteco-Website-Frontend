export default function({ $axios, redirect }) {
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);
        const skipGlobal400Redirect = Boolean(
            error && error.config && error.config.skipGlobal400Redirect
        );

        if (code === 400 && !skipGlobal400Redirect) {
            redirect('/400');
        }
    });
    $axios.onRequest(config => {
        return config;
    });
}
