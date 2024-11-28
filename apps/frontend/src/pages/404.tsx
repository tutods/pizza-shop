import { Link } from 'react-router';

function NotFound() {
  return (
    <section className="flex h-screen flex-col items-center gap-2">
      <h1 className="font-bold text-4xl">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-500 underline dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </section>
  );
}

export { NotFound };
