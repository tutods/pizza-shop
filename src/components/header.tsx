import { Home, Pizza, UtensilsCrossed } from 'lucide-react';
import { NavLink } from '~/components/nav-link';
import { Separator } from '~/components/ui/separator';

function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="size-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center gap-x-4 lg:gap-x-6">
          <NavLink to="/">
            <Home className="size-4" />
            Dashboard
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="size-4" />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export { Header };
