import { Outlet } from 'react-router';

function AppLayout() {
  return (
    <section>
      <h1>Cabeçalho</h1>
      <div>
        <Outlet />
      </div>
    </section>
  );
}

export { AppLayout };
