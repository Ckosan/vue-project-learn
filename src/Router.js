import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Hello from '@/components/hello'
import Farther from "@/components/Farther";

import HelloWorld from "@/components/HelloWorld";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: 'farther',
      component: Farther
    },
    {
      path: "/hello",
      component: HelloWorld
    }
  ]
})