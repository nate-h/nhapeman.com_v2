const app = new Vue({
  el: '#app',
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,   // STORE OPTION INJECTED INTO ALL CHILDREN?
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
