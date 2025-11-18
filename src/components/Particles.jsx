import { useMemo, useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadFirePreset } from 'tsparticles-preset-fire';

export default function PlasmaBackground() {
  const id = 'tsparticles';

  const options = useMemo(() => {
    // Seed by YYYYMMDD to evolve daily
    const now = new Date();
    const seed = Number(`${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`);

    return {
      detectRetina: true,
      background: { color: { value: 'transparent' } },
      fullScreen: { enable: true, zIndex: 0 },
      fpsLimit: 60,
      preset: 'fire',
      particles: {
        number: { value: 40, density: { enable: true, area: 800 } },
        color: { value: ['#6366f1', '#a78bfa'] },
      },
      motion: { disable: false },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      random: false,
      seed,
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFirePreset(engine);
  }, []);

  return (
    <Particles id={id} init={particlesInit} options={options} />
  );
}
