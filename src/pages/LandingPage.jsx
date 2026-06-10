import { Hero } from "../components/sections/Hero";
import { Problem } from "../components/sections/Problem";
import { WhatIsEdflo } from "../components/sections/WhatIsEdflo";
import { DayWithEdflo } from "../components/sections/DayWithEdflo";
import { CoreCapabilities } from "../components/sections/CoreCapabilities";
import { Analytics } from "../components/sections/Analytics";
import { WhyChooseEdflo } from "../components/sections/WhyChooseEdflo";
import { TrustGovernance } from "../components/sections/TrustGovernance";
import { FutureVision } from "../components/sections/FutureVision";
import { FinalCTA } from "../components/sections/FinalCTA";

export function LandingPage({ onOpenWaitlist }) {
  return (
    <main>
      <Hero onOpenWaitlist={onOpenWaitlist} />
      <Problem />
      <WhatIsEdflo />
      <DayWithEdflo />
      <CoreCapabilities />
      <Analytics />
      <WhyChooseEdflo />
      <TrustGovernance />
      <FutureVision />
      <FinalCTA onOpenWaitlist={onOpenWaitlist} />
    </main>
  );
}
