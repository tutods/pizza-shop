import {} from '~/components/ui/card';
import { DayOrdersAmountCard } from '~/pages/app/dashboard/components/day-orders-amount-card';
import { MonthCanceledOrdersAmountCard } from '~/pages/app/dashboard/components/month-canceled-orders-amount-card';
import { MonthOrdersAmountCard } from '~/pages/app/dashboard/components/month-orders-amount-card';
import { MonthRevenueCard } from '~/pages/app/dashboard/components/month-revenue-card';
import { PopularProductsChart } from '~/pages/app/dashboard/components/popular-products-chart';
import { RevenueChart } from '~/pages/app/dashboard/components/revenue-chart';

function Dashboard() {
  return (
    <>
      <title>Dashboard | pizza.shop</title>
      <section className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl tracking-tight">Dashboard</h1>

        <section className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </section>

        <section className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </section>
      </section>
    </>
  );
}

export { Dashboard };
