require('./bootstrap');
import home from "./components/home.vue"

window.Vue = require('vue');
window.Vuex = require('vuex')

Vue.component('home', require('./components/home.vue').default);
Vue.component('navBar', require('./components/navBar.vue').default);

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    counts: a => this.state.count
  },
  mutations: {
    increment() {
      this.state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  }
})


export function createApp() {
  return new Vue({
    store: store,
    render: h => h(home)
  });
}
