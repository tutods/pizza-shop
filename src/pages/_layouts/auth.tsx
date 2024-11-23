import { Outlet } from 'react-router';

function AuthLayout() {
  return (
    <section>
      <h1>Auth</h1>
      <div>
        <Outlet />
      </div>
    </section>
  );
}

export { AuthLayout };
