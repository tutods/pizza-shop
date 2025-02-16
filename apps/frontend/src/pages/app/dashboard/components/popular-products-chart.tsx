import { BarChart } from 'lucide-react';
import { Pie, PieChart } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '~/components/ui/chart';

const chartData = [
  {
    product: 'pepperoni',
    amount: 40,
    fill: 'var(--color-pepperoni)',
  },
  {
    product: 'calabresa',
    amount: 30,
    fill: 'var(--color-calabresa)',
  },
  {
    product: 'havaiana',
    amount: 50,
    fill: 'var(--color-havaiana)',
  },
  {
    product: 'margherita',
    amount: 16,
    fill: 'var(--color-margherita)',
  },
  {
    product: 'vegetariana',
    amount: 26,
    fill: 'var(--color-vegetariana)',
  },
];

const chartConfig = {
  amount: {
    label: 'Quantidade',
  },
  pepperoni: {
    label: 'Pepperoni',
    color: 'hsl(var(--chart-1))',
  },
  calabresa: {
    label: 'Calabresa',
    color: 'hsl(var(--chart-2))',
  },
  havaiana: {
    label: 'Havaiana',
    color: 'hsl(var(--chart-3))',
  },
  margherita: {
    label: 'Margherita',
    color: 'hsl(var(--chart-4))',
  },
  vegetariana: {
    label: 'Vegetariana',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <CardTitle className="font-medium text-base">Produtos mais populares</CardTitle>
        <BarChart className="size-4" />
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              paddingAngle={12}
              data={chartData}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
