import {} from '@radix-ui/react-select';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '~/components/ui/button';

type PaginationProps = {
  /**
   * Total of results.
   */
  totalCount: number;

  /**
   * Current page index.
   * @default 0 (first page)
   */
  pageIndex?: number;

  /**
   * Number of items per page.
   * @default 10
   */
  perPage?: number;
};

function Pagination({ totalCount, perPage = 10, pageIndex = 0 }: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) ?? 1;

  return (
    <div className="flex items-center justify-between">
      <p className="text-muted-foreground text-sm">Total de {totalCount} item(s)</p>

      <div className="flex items-center gap-6 lg:gap-8">
        <p className="font-medium text-sm">
          Página {pageIndex + 1} de {pages}
        </p>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden size-8 p-0 lg:flex">
            <span className="sr-only">Navegar para a primeira página</span>
            <ChevronsLeft className="size-4" />
          </Button>

          <Button variant="outline" className="size-8 p-0">
            <span className="sr-only">Navegar para a página anterior</span>
            <ChevronLeft className="size-4" />
          </Button>

          <Button variant="outline" className="size-8 p-0">
            <span className="sr-only">Navegar para página anterior</span>
            <ChevronRight className="size-4" />
          </Button>

          <Button variant="outline" className="hidden size-8 p-0 lg:flex">
            <span className="sr-only">Navegar para a última página</span>
            <ChevronsRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export { Pagination };
