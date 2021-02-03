export default async ({ app, store }) => {
    app.router.beforeEach((to, from, next) => {
        if (to.path.includes("/website") || to.path === "/") {
            store.commit('app/setPreloader', true);
            next();
        } else {
            store.commit('app/setPreloaderStore', true)
            next();
        }
    });
};
