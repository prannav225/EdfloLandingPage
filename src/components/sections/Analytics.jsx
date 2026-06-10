import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";

const BarChart = () => (
  <div className="flex items-end gap-1.5 h-32 w-full mt-4">
    {[40, 70, 45, 90, 65, 85, 55, 75, 100].map((height, i) => (
      <div key={i} className="flex-1 h-full bg-coral/20 rounded-t-[2px] hover:bg-coral/40 transition-colors relative group">
        <div 
          className="absolute bottom-0 w-full bg-coral rounded-t-[2px] transition-all duration-1000" 
          style={{ height: `${height}%` }}
        ></div>
        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-ink text-white text-[10px] py-1 px-2 rounded-[2px] transition-opacity z-10 pointer-events-none">
          {height}%
        </div>
      </div>
    ))}
  </div>
);

const MetricCard = ({ title, value, trend, positive }) => (
  <div className="bg-white border border-ink/5 rounded-xl p-4 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)]">
    <div className="text-[10px] uppercase tracking-wider text-ink/40 mb-2 font-semibold">{title}</div>
    <div className="flex items-end gap-3">
      <div className="text-2xl font-mono text-ink">{value}</div>
      <div className={`text-xs font-mono pb-0.5 ${positive ? 'text-[#10B981]' : 'text-coral'}`}>
        {positive ? '+' : ''}{trend}
      </div>
    </div>
  </div>
);

export function Analytics() {
  return (
    <section className="py-24 bg-canvas border-t border-ink/10 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                Insights Beyond Administration
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-ink/70 leading-relaxed mb-8">
                Move from collecting data to understanding it. Edflo's analytics engine provides real-time visibility into every aspect of campus performance.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <ul className="space-y-4">
                {[
                  "Department Attendance trends across semesters",
                  "Subject Performance mapping to identify bottlenecks",
                  "Faculty Effectiveness and workload distribution",
                  "Academic Trends predicting student outcomes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-coral/10 flex items-center justify-center shrink-0 mt-0.5 text-coral">
                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-ink/80">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="bg-white/80 backdrop-blur-md border border-ink/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-6 rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-6 border-b border-ink/5 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-[2px] bg-ink/10"></div>
                  <div className="w-3 h-3 rounded-[2px] bg-ink/10"></div>
                </div>
                <div className="text-[10px] font-mono text-ink/40 uppercase tracking-widest ml-2">Analytics.Dashboard</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <MetricCard title="Avg Attendance" value="86.4%" trend="2.1%" positive={true} />
                <MetricCard title="At-Risk Students" value="142" trend="-12" positive={true} />
              </div>
              
              <div className="bg-canvas rounded-xl p-5 border border-ink/5">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[10px] uppercase tracking-wider text-ink/50 font-semibold">Semester Performance</div>
                  <div className="text-[10px] font-mono bg-white px-2 py-1 rounded-[2px] border border-ink/5 text-ink/70">YTD</div>
                </div>
                <BarChart />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
