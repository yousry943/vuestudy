import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import  Post  from '../components/Posts';
import  PostDetails  from '../components/PostDetails';

const routes=[
    // dynamic segments start with a colon
    { path: '/', component: Post },
    { path: '/post/:id', component: PostDetails ,name:'PostDetails' }
  ];

const router = new VueRouter({

routes,hashbang:false,mode:'history'
  })

export default router;
