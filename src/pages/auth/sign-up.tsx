import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

const signUpForm = z.object({
  restaurant: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z
    .string({
      message: 'Por favor, introduza um email válido',
    })
    .email({ message: 'Por favor, introduza um email válido' }),
});

type SignUpForm = z.infer<typeof signUpForm>;

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
  });

  async function handleSignIn(data: SignUpForm) {
    try {
      console.info(data);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success('Restaurante criado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      });
    } catch {
      toast.error('Erro ao criar restaurante.');
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button asChild className="absolute top-8 right-8" variant="ghost">
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <section className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-2xl tracking-tight">Criar conta grátis</h1>
            <p className="text-muted-foreground text-sml">Seja um parceiro e comece as suas vendas!</p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurant">Nome do estabelecimento</Label>
              <Input
                placeholder="Insira o nome do seu estabelecimento"
                id="restaurant"
                type="text"
                {...register('restaurant')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">O seu nome</Label>
              <Input placeholder="Insira o seu nome" id="managerName" type="text" {...register('managerName')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">O seu email</Label>
              <Input placeholder="Insira o seu email" id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">O seu contact</Label>
              <Input placeholder="Insira o seu contact" id="phone" type="tel" {...register('phone')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Criar conta
            </Button>

            <p className="px-6 text-center text-muted-foreground text-sm leading-relaxed">
              Ao continuar, voce concorda com os{' '}
              <a href="#termos" className="underline underline-offset-4">
                termos de serviços
              </a>{' '}
              e{' '}
              <a href="#politica" className="underline underline-offset-4">
                política de privacidade
              </a>
              .
            </p>
          </form>
        </section>
      </div>
    </>
  );
}

export { SignUp };
