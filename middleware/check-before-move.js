export default function ({ store }) {
  let setup = false
  if(!setup) {
    store.app.router.beforeEach((to, from, next) => {
      setup = true
      if(confirm("Are you sure?")) {
        next()
      } else {
        next(false)
      }
    })
  }
}