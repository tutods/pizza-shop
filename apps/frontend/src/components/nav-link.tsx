import { Link, type LinkProps, useLocation } from 'react-router';
import { cn } from '~/lib/utils';

type NavLinkProps = LinkProps;

function NavLink({ className = '', ...props }: NavLinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      {...props}
      data-active={pathname === props.to}
      className={cn([
        'flex items-center gap-1.5',
        'font-medium text-muted-foreground text-sm',
        'transition-all duration-150 ease-in-out hover:text-foreground',
        'data-[active=true]:text-foreground',
        className,
      ])}
    />
  );
}

export { NavLink };
