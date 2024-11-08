import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import HomePage from '../pages/Home.vue';
import TasksPage from '../pages/TasksPage.vue';
import ContactUs from '../pages/ContactUs.vue';


const routes = [
    {
        path:"/login",
        component:Login,
        name:"login",
    },
    {
        path:"/register",
        component:Register,
        name:"register",
    },
    {
        path:"/home",
        component:HomePage,
        name:"home",
    },
    {
        path:"/tasks",
        component:TasksPage,
        name:"tasks",
    },
    {
        path:"/contactus",
        component:ContactUs,
        name:"contactus",
    },
]

export default routes