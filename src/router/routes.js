import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import HomePage from '../pages/Home.vue';
import TasksPage from '../pages/TasksPage.vue';
import ContactUs from '../pages/ContactUs.vue';
import Test from '../pages/Test.vue';


const routes = [
    {
        path:"/login",
        component:Login,
        name:"login",
        meta: {
            guest: true
        },
    },
    {
        path:"/register",
        component:Register,
        name:"register",
        meta: {
            guest: true
        },
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
        meta: {
            auth: true
        },
    },
    {
        path:"/contactus",
        component:ContactUs,
        name:"contactus",
    },
    {
        path:"/test",
        component:Test,
        name:"test",
    },
]

export default routes