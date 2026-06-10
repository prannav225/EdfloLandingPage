import { Hero } from "../components/sections/Hero";
import { Problem } from "../components/sections/Problem";
import { Architecture } from "../components/sections/Architecture";
import { MVP } from "../components/sections/MVP";
import { Audience } from "../components/sections/Audience";
import { Philosophy } from "../components/sections/Philosophy";
import { About } from "../components/sections/About";
import { BuildingInPublic } from "../components/sections/BuildingInPublic";
import { Contact } from "../components/sections/Contact";

export function LandingPage({ onOpenWaitlist }) {
  return (
    <main>
      <Hero onOpenWaitlist={onOpenWaitlist} />
      <Problem />
      <Architecture />
      <MVP />
      <Audience />
      <Philosophy />
      <About />
      <BuildingInPublic onOpenWaitlist={onOpenWaitlist} />
      <Contact />
    </main>
  );
}
