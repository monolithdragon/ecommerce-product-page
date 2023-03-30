import Footer from 'components/containers/footer';
import Navbar from 'components/containers/navbar';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="container mx-auto grid h-full w-full grid-rows-[60px_1fr] md:grid-rows-[90px_1fr] lg:w-4/5">
      <header className="flex place-content-center px-4 md:border-b md:px-0">
        <Navbar />
      </header>
      <main className="lg:p-20">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
