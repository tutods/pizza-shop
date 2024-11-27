import { Helmet } from 'react-helmet-async';
import {} from '~/components/ui/card';
import { DayOrdersAmountCard } from '~/pages/app/dashboard/components/day-orders-amount-card';
import { MonthCanceledOrdersAmountCard } from '~/pages/app/dashboard/components/month-canceled-orders-amount-card';
import { MonthOrdersAmountCard } from '~/pages/app/dashboard/components/month-orders-amount-card';
import { MonthRevenueCard } from '~/pages/app/dashboard/components/month-revenue-card';

function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <section className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl tracking-tight">Dashboard</h1>

        <section className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </section>
      </section>
    </>
  );
}

export { Dashboard };
