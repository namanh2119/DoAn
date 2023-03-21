import Home from '../pages/Home';
import Food from '../pages/Food';
import Drink from '../pages/Drink';
import Contact from '../pages/Contact';
import Pay from '../pages/Pay';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/food', component: Food },
    { path: '/drink', component: Drink },
    { path: '/contact', component: Contact },
    { path: '/pay', component: Pay },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
