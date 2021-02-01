export default ({ app }) => {
    app.router.afterEach((to, from) => {
      console.log("routes fired to", to , " from ", from )
    }
 }