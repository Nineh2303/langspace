import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '../view/HomeView.vue'
import CourseView from "../view/CourseView.vue";

const routes = [
  { path: '/', name:'Home', component: HomeView },
  {path: '/course', name:'course',component:  CourseView}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export  default router