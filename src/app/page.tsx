import { NEXT_PUBLIC_URL } from '../config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'An Onchain App in 100 Components',
  description: 'LFG',
  openGraph: {
    title: 'An Onchain App in 100 Components',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
};

export default function Page() {
  return (
    <>
      ok
    </>
  );
}