import { ArrowRight, Search, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';

function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <section className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl tracking-tight">Pedidos</h1>
      </section>
      <section className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="font-semibold text-sm">Filtros</span>
          <Input id="clientName" placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>

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
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <TableRow key={index}>
                  <TableCell>
                    <Button variant="outline" size="xs">
                      <Search className="size-3" />
                      <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                  </TableCell>
                  <TableCell className="font-medium font-mono text-xs">d5b7d2d1-162c-4eda-b1fe-f4617bb81449</TableCell>
                  <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-slate-400" />
                      <span className="font-medium text-muted-foreground">Pendente</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">Daniel Sousa</TableCell>
                  <TableCell className="font-medium">R$ 149,90</TableCell>
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
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}

export { Orders };
