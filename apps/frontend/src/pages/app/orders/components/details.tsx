import { DialogContent, DialogDescription, DialogHeader, DialogPortal, DialogTitle } from '~/components/ui/dialog';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '~/components/ui/table';

function OrderDetails() {
  return (
    <DialogPortal>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pedido 98345aa2-8961-478f-b0f9-fa89c65b4332</DialogTitle>
          <DialogDescription>Detalhes do pedido</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">Pendente</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex justify-end">Daniel Sousa</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Contacto</TableCell>
                <TableCell className="flex justify-end">+351 999 999 999</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Email</TableCell>
                <TableCell className="flex justify-end">email@example.com</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Realizado há</TableCell>
                <TableCell className="flex justify-end">3 minutos</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Qtd.</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead>Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Pizza Pepperoni</TableCell>
                <TableCell>2</TableCell>
                <TableCell>R$ 69,90</TableCell>
                <TableCell>R$ 139,80</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pizza Margherita</TableCell>
                <TableCell>2</TableCell>
                <TableCell>R$ 59,90</TableCell>
                <TableCell>R$ 119,80</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total do pedido</TableCell>
                <TableCell className="text-right font-medium">R$ 259,60</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </DialogContent>
    </DialogPortal>
  );
}

export { OrderDetails };
