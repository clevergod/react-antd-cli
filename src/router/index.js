/**
 * Created by qingclass on 17/5/26.
 */
import Home from '../pages/home';
import Login from '../pages/login';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/home',
        component: Home
    }
]

export default routes