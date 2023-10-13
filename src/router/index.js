// import { createRouter, createWebHistory } from 'vue-router';

// import pageNotFound from "@/components/pageNotFound.vue";
// import app from "@/app.vue";
// // import Destination from '@/components/error.html'


// const routes = [
//     {
//       path : '/',
//       component : app,
//       name : 'home'
//     },
//     {
//       name : 'err',
//       path : '/error.html',
//       component : pageNotFound, 
       
//     },
//     {   
//       path: '/:cathcAll(.*)*',
//       component : pageNotFound,
//       redirect:'/error.html',
//     },
// ]

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// })

// export default router


// import App from "@/app.vue";
// import PageNotFound from "@/components/pageNotFound.vue";

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: App
//   },
//   {
//     path: '/:catchAll(.*)',
//     name: 'Not Found',
//     component: PageNotFound
//   }
// ];

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes
// });

// export default router;

import { createRouter, createWebHistory } from 'vue-router';

import MainContent from "@/components/MainContent.vue";
import PageNotFound from "@/components/pageNotFound.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainContent
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: PageNotFound,
    redirect : '/error'
  },
  {
    path : '/error',
    component: PageNotFound,
  },
  {
    path : '/robots.txt',
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;