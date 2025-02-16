import { formatDistanceToNow } from 'date-fns';
import { pt } from 'date-fns/locale/pt';
import { ArrowRight, Search, X } from 'lucide-react';
import type { GetOrdersResponse } from '~/api/get-orders';
import { OrderStatus } from '~/components/order-status';
import { Button } from '~/components/ui/button';
import { Dialog, DialogTrigger } from '~/components/ui/dialog';
import { TableCell, TableRow } from '~/components/ui/table';
import { OrderDetails } from '~/pages/app/orders/components/details';

type OrderTableRowProps = {
  order: GetOrdersResponse['orders'][number];
};

function OrderTableRow({ order }: OrderTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="size-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-medium font-mono text-xs">{order.orderId}</TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(new Date(order.createdAt), {
          locale: pt,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {order.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </TableCell>
      <TableCell>
        <Button size="xs" variant="outline">
          <ArrowRight className="mr-2 size-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button size="xs" variant="ghost">
          <X className="mr-2 size-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}

export { OrderTableRow };
