import type { OrderStatus as OrderStatusType } from '~/api/get-orders';
import { cn } from '~lib/utils';

type OrderStatusProps = {
  status: OrderStatusType;
};

const orderStatusMap: Record<OrderStatusType, string> = {
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  pending: 'Pendente',
  processing: 'A preparar',
};

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={cn([
          'size-2 rounded-full',
          {
            'bg-slate-400': status === 'pending',
            'bg-rose-500': status === 'canceled',
            'bg-amber-400': status === 'processing' || status === 'delivering',
            'bg-emerald-500': status === 'delivered',
          },
        ])}
      />
      <span className="font-medium text-muted-foreground">{orderStatusMap[status]}</span>
    </div>
  );
}
