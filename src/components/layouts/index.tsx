import Footer from 'components/containers/footer';
import Navbar from 'components/containers/navbar';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="container mx-auto grid h-full grid-rows-[60px_1fr] md:grid-rows-[80px_1fr]">
      <header className="flex items-center border-b">
        <Navbar />
      </header>
      <main className="p-20">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
