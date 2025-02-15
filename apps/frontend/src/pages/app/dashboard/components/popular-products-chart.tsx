import { BarChart } from 'lucide-react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { cn } from '~/lib/utils';

const data = [
  {
    product: 'Pepperoni',
    amount: 40,
  },
  {
    product: 'Calabresa',
    amount: 30,
  },
  {
    product: 'Havaiana',
    amount: 50,
  },
  {
    product: 'Margherita',
    amount: 16,
  },
  {
    product: 'Vegetariana',
    amount: 26,
  },
];

const colors = ['fill-sky-500', 'fill-amber-500', 'fill-violet-500', 'fill-emerald-500', 'fill-rose-500'];

function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <CardTitle className="font-medium text-base">Produtos mais populares</CardTitle>
        <BarChart className="size-4" />
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                const radian = Math.PI / 180;
                const radius = 12 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * radian);
                const y = cy + radius * Math.sin(-midAngle * radian);

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                );
              }}
            >
              {data.map((_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey:
                <Cell
                  key={`cell-${index}`}
                  className={cn([colors[index], 'stroke-background outline-0 hover:opacity-80'])}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export { PopularProductsChart };
