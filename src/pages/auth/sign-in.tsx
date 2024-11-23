import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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

  async function handleSignInSubmit(data: SignInForm) {
    console.info(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <section className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-2xl tracking-tight">Acessar Painel</h1>
            <p className="text-muted-foreground text-sml">Acompanhe suas vendas pelo painel do parceiro!</p>
          </div>

          <form onSubmit={handleSubmit(handleSignInSubmit)} className="space-y-4">
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
