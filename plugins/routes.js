export default async ({ app, store }) => {

    app.router.afterEach((to, from) => {
      console.log("Entered route....")
      setTimeout(() => {
        store.commit('app/setPreloader', false)
      }, 5000)
      
    });
  
  }