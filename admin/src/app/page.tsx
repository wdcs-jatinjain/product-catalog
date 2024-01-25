import { ToastContainer } from 'react-toastify';
import AdminLoginPage from './login/page'

export default function Home() {
  return (
    <div>
      <AdminLoginPage />
      <ToastContainer />
    </div>
  );
}
