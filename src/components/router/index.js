import Home from '../pages/Home';
import Food from '../pages/Food';
import Drink from '../pages/Drink';
import Contact from '../pages/Contact';
import Pay from '../pages/Pay';
import Account from '../pages/Account';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/food', component: Food },
    { path: '/drink', component: Drink },
    { path: '/contact', component: Contact },
    { path: '/pay', component: Pay },
    { path: '/account', component: Account },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
