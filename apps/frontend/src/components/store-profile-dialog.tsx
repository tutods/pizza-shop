import { zodResolver } from '@hookform/resolvers/zod';
import { DialogDescription, DialogOverlay, DialogTitle } from '@radix-ui/react-dialog';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { getManagedRestaurant } from '~/api/get-managed-restaurant';
import { Button } from './ui/button';
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogPortal } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
});

type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export function StoreProfileDialog() {
  const { data } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
  });

  const form = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: data?.name ?? '',
      description: data?.description ?? '',
    },
  });

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
        <form>
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

            <Button type="submit" variant="success">
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </DialogPortal>
  );
}
