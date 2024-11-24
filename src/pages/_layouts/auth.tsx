import { Pizza } from 'lucide-react';
import { Outlet } from 'react-router';

function AuthLayout() {
  return (
    <section className="grid min-h-screen grid-cols-2 antialiased">
      <section className="flex h-full flex-col justify-between border-r border-r-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-foreground text-lg">
          <Pizza className="size-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="text-sm">Painel de Parceiro &copy; pizza.shop - {new Date().getFullYear()}</footer>
      </section>

      <section className="relative flex flex-col items-center justify-center">
        <Outlet />
      </section>
    </section>
  );
}

export { AuthLayout };
