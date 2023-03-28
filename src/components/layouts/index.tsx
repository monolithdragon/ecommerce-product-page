import Footer from 'components/containers/footer';
import Navbar from 'components/containers/navbar';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
