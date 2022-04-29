import Vue from 'vue'
import Vuex from 'vuex'
import counter from "@/store/modules/counter";
import dummyFields from "@/store/modules/dummyField";
import mutations from "./mutations";
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: { counter, dummyFields},
    mutations ,
})
