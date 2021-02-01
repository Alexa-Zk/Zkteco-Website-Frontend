export default async ({ app, store }) => {

    app.router.beforeEach((to, from, next) => {
        console.log("Entering Route...");
        next()
        store.commit('app/setPreloader', true)
      })
  
  }