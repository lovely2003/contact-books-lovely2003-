import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ContactDetails from './views/ContactDetails.vue';
import AddContact from './views/AddContact.vue';
import EditContact from './views/EditContact.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/contact/:id', component: ContactDetails },
  { path: '/add', component: AddContact },
  { path: '/edit/:id', component: EditContact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
