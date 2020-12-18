export default function({ store, redirect }) {
    if (!store.state.auth.isLoggedIn) {
        return redirect('/store/account/login');
    }
}
