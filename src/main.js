
import { createApp } from 'vue';
import { createPinia } from 'pinia'; 

import VueAnimateOnScroll from 'vue-animate-onscroll'

// import { auth } from "./includes/firebase";

import VeeValidatePlugin from "@/includes/validation";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(VueAnimateOnScroll);
app.use(VeeValidatePlugin);

app.use(createPinia());
app.use(router);

app.mount('#app');
