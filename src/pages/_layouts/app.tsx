import { Outlet } from 'react-router';
import { Header } from '~/components/header';

function AppLayout() {
  return (
    <section className="flex min-h-screen flex-col antialiased">
      <Header />

      <section className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </section>
    </section>
  );
}

export { AppLayout };
