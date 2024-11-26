import {} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { OrderTableFilters } from '~/pages/app/orders/table-filters';
import { OrderTableRow } from '~/pages/app/orders/table-row';

function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <section className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl tracking-tight">Pedidos</h1>
      </section>
      <section className="space-y-2.5">
        <OrderTableFilters />
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]" />
                <TableHead className="w-[180px]">ID</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Estado</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]" />
                <TableHead className="w-[132px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey:
                <OrderTableRow key={index} />
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}

export { Orders };
