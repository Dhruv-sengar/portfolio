'use client';

import dynamic from 'next/dynamic';

const SpaceBackground = dynamic(
  () => import('@/components/3d/SpaceBackground').then(m => ({ default: m.SpaceBackground })),
  { ssr: false }
);

export function ClientSpaceBackground() {
  return <SpaceBackground />;
}
