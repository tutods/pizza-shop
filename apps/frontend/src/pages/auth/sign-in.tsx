import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { z } from 'zod';
import { signIn } from '~/api/sign-in.ts';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

const signInForm = z.object({
  email: z
    .string({
      message: 'Por favor, introduza um email válido',
    })
    .email({ message: 'Por favor, introduza um email válido' }),
});

type SignInForm = z.infer<typeof signInForm>;

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
  });

  const { mutateAsync: authenticate } = useMutation<void, Error, SignInForm>({
    mutationFn: signIn,
    onSuccess: () => {
      toast.success('Enviamos um link de autenticação para o seu e-mail.', {
        // action: {
        //   label: 'Reenviar',
        //   onClick: () => handleSignIn(data),
        // },
      });
    },
    onError: () => {
      toast.error('Credenciais inválidas.');
    },
  });

  async function handleSignIn(data: SignInForm) {
    await authenticate(data);
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button asChild className="absolute top-8 right-8" variant="ghost">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>

        <section className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-2xl tracking-tight">Acessar Painel</h1>
            <p className="text-muted-foreground text-sml">Acompanhe suas vendas pelo painel do parceiro!</p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">O seu email</Label>
              <Input placeholder="Insira o seu email" id="email" type="email" {...register('email')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </section>
      </div>
    </>
  );
}

export { SignIn };
