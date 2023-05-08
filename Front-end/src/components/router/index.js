import Home from '../pages/Home';
import Food from '../pages/Food';
import Drink from '../pages/Drink';
import Contact from '../pages/Contact';
import Pay from '../pages/Pay';
import Account from '../pages/Account';
import ProductDetail from '../pages/ProductDetail';
import Dashboard from '../pages/Admin/AdminPages/Dashboard';
import MenuFood from '../pages/Admin/AdminPages/MenuFood';
import MenuDrink from '../pages/Admin/AdminPages/MenuDrink';
import Oders from '../pages/Admin/AdminPages/Oders';
import Users from '../pages/Admin/AdminPages/Users';
import Feedback from '../pages/Admin/AdminPages/Feedback';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/food', component: Food },
    { path: '/drink', component: Drink },
    { path: '/contact', component: Contact },
    { path: '/pay', component: Pay },
    { path: '/account', component: Account },
    { path: '/productdetail', component: ProductDetail },
    { path: '/admin', component: Dashboard },
    { path: '/admin/foods', component: MenuFood },
    { path: '/admin/drinks', component: MenuDrink },
    { path: '/admin/orders', component: Oders },
    { path: '/admin/users', component: Users },
    { path: '/admin/feedback', component: Feedback },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
