import { zodResolver } from '@hookform/resolvers/zod';
import { DialogDescription, DialogOverlay, DialogTitle } from '@radix-ui/react-dialog';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { type GetManagedRestaurantResponse, getManagedRestaurant } from '~/api/get-managed-restaurant';
import { updateProfile } from '~/api/update-profile';
import { Button } from './ui/button';
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogPortal } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().nullable(),
});

type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export function StoreProfileDialog() {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Number.POSITIVE_INFINITY,
  });

  const form = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: data?.name ?? '',
      description: data?.description ?? '',
    },
  });

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate(variables) {
      const cached = queryClient.getQueryData<GetManagedRestaurantResponse>(['managed-restaurant']);

      if (cached) {
        queryClient.setQueryData(['managed-restaurant'], {
          ...cached,
          ...variables,
        });
      }

      return { previousProfile: cached };
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        queryClient.setQueryData(['managed-restaurant'], context.previousProfile);
      }

      toast.error('Falha ao atualizar o perfil, tente novamente!');
    },
    onSuccess() {
      toast.success('Perfil atualizado com sucesso!');
    },
  });

  async function handleUpdateProfile(data: StoreProfileSchema) {
    await updateProfileFn(data);
  }

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Perfil da loja</DialogTitle>
          <DialogDescription>
            Atualize as informações do seu estabelecimento visíveis aos seus clientes.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleUpdateProfile)}>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nome
              </Label>
              <Input {...form.register('name')} className="col-span-3" id="name" name="name" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Descrição
              </Label>
              <Textarea {...form.register('description')} className="col-span-3" id="description" name="description" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost" type="button">
                Cancelar
              </Button>
            </DialogClose>

            <Button type="submit" variant="success" disabled={form.formState.isSubmitting}>
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </DialogPortal>
  );
}
