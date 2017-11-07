
import home from './components/home.vue';
import homehold from './components/household.vue';
import beauty from './components/beauty.vue';
import life from './components/life.vue';
import motherBaby from './components/motherBaby.vue';
import finefood from './components/finefood.vue';

const routes =[
    {path:'/home',component:home},
    {path:'/homehold',component:homehold},
    {path:'/beauty',component:beauty},
    {path:'/life',component:life},
    {path:'/motherBaby',component:motherBaby},
    {path:'/finefood',component:finefood}
];

export default {
    routes:routes
}