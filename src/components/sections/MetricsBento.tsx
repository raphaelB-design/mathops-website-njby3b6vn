import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { Activity, Target, Zap, BarChart } from 'lucide-react'
import { ChartContainer } from '@/components/ui/chart'

const chartData1 = [{ v: 10 }, { v: 25 }, { v: 15 }, { v: 40 }, { v: 30 }, { v: 55 }]
const chartData2 = [{ v: 55 }, { v: 40 }, { v: 45 }, { v: 30 }, { v: 20 }, { v: 35 }]

const chartConfig = {
  v: {
    label: 'Value',
    color: 'var(--accent-gradient-start)',
  },
}

const metrics = [
  {
    title: 'Total Revenue',
    value: '$1.2M',
    change: '+23.5%',
    icon: Activity,
    data: chartData1,
    color: 'var(--accent-gradient-start)',
  },
  {
    title: 'Market Share',
    value: '+3.7%',
    change: '+5.2%',
    icon: Target,
    data: chartData2,
    color: 'var(--accent-gradient-end)',
  },
  {
    title: 'Efficiency Rate',
    value: '98%',
    change: '+1.2%',
    icon: Zap,
    data: chartData1,
    color: 'var(--accent-gold)',
  },
  {
    title: 'Client Retention',
    value: '95.5%',
    change: '+4.1%',
    icon: BarChart,
    data: chartData2,
    color: 'var(--success)',
  },
]

export function MetricsBento() {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section className="py-20 bg-[var(--bg-primary)] relative z-10 -mt-10">
      <div
        ref={ref}
        className={cn(
          'container mx-auto px-4 md:px-6 opacity-0',
          isRevealed && 'animate-fade-in-up',
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-[16px] p-6 backdrop-blur-xl transition-all duration-[400ms] hover:-translate-y-[4px] hover:shadow-[0_8px_30px_rgba(74,108,247,0.15)] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[var(--text-secondary)] text-sm font-medium flex items-center gap-2">
                    <metric.icon className="w-4 h-4" style={{ color: metric.color }} />
                    {metric.title}
                  </span>
                  <div className="bg-[var(--success)]/10 text-[var(--success)] text-xs px-2 py-0.5 rounded-full font-medium">
                    {metric.change}
                  </div>
                </div>

                <div className="text-4xl font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] mb-6">
                  {metric.value}
                </div>

                <div className="h-16 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={metric.data}>
                        <Line
                          type="monotone"
                          dataKey="v"
                          stroke={metric.color}
                          strokeWidth={2}
                          dot={false}
                          isAnimationActive={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
