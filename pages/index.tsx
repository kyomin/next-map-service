import { Fragment } from 'react';
import MapSection from '@/components/home/MapSection';

export default function Home() {
  return (
    <Fragment>      
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </Fragment>
  );
}
