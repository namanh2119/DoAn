import classNames from "classnames/bind";
import styles from './Admin.module.scss'
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles)

function Admin({children}) {
    return (<p>
     <main>
         <Sidebar/>
            <div className={cx('container')}>{children}</div>
     </main>
     </p> );
}

export default Admin;
