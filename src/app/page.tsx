import { AiInsights } from "./_components/ai-insights";
import { BalanceCard } from "./_components/balance-card";
import { ChartCard } from "./_components/chart-card";
import { FinancialMetricCard } from "./_components/financial-metric-card";
import { Header } from "./_components/header";
import { Sidebar } from "./_components/sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#0B1326]">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header userName="João da Silva" date={new Date()} />
        <main className="p-8 space-y-8">
          <section className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            <div className="lg:col-span-2 col-span-1">
              <BalanceCard balance={1000} revenues={500} expenses={500} />
            </div>
              <FinancialMetricCard />
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ChartCard 
              depositsTotal={1000} 
              expensesTotal={500} 
              investmentsTotal={500} 
              balance={1000} 
            />

            <AiInsights />
          </section>
        </main>
      </div>
    </div>
  );
}
