import { createRouter, createWebHistory } from 'vue-router'
import TaskView from '../views/TaskView.vue'
import IssueView from '../views/IssueView.vue'
import LearningVue from '../views/LearningView.vue'
import PostView from '../views/PostView.vue'
import ProfileView from '../views/ProfileView.vue'
import BlogView from '../views/BlogView.vue'
import Error404Page from '../views/Error404Page.vue'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: HomeView
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TaskView
  },
  {
    path: '/issues',
    name: 'issues',
    component: IssueView
  },
  {
    path: '/learnings',
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
    path: '/blogs',
    name: 'blogs',
    component: BlogView
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
