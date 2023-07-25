import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IssueView from '../views/IssueView.vue'
import LearningVue from '../views/LearningView.vue'
import PostView from '../views/PostView.vue'
import ProfileView from '../views/ProfileView.vue'
import IssueDetails from '../views/IssueDetails.vue'
import Error404Page from '../views/Error404Page.vue'
const routes = [
  {
    path: '/',
    name: 'tasks',
    component: HomeView
  },
  {
    path: '/issues',
    name: 'issues',
    component: IssueView
  },
  {
    path: '/learning',
    name: 'learnings',
    component: LearningVue
  },
  {
    path: '/post',
    name: 'post',
    component: PostView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/issue/:id',
    name: 'issue-details',
    component: IssueDetails
  },
  {
    path: '/:catchAll(.*)',
    name: 'error-page',
    component: Error404Page
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
