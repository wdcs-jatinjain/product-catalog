import Navbar from "../Navbar/navbar";
import styles from '../ui/dashboard/dashboard.module.css'

const Layout = ({children}:any) => {
    return (
        <div className={styles.content}>
            <Navbar/>
            {children}
        </div>
            )
}
export default Layout