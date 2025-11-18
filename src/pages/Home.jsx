import Hero from '../components/Hero';
import PlasmaBackground from '../components/Particles';
import { ExecutiveSummary, LevelsThePlayingField, WhyDifferent, Pricing } from '../components/Sections';

export default function Home({ onEnter }){
  return (
    <div className="relative">
      <PlasmaBackground />
      <Hero onEnter={onEnter} />
      <div className="relative z-[1]">
        <ExecutiveSummary />
        <LevelsThePlayingField />
        <WhyDifferent />
        <Pricing />
      </div>
    </div>
  );
}
