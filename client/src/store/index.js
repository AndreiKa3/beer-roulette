import { createStore } from "vuex";
import info from './info/info'

const store = createStore({
  modules: {
    info
  }
})

export default store