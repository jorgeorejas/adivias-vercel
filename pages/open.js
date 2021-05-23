import { Stack, Gear, MRR } from '@/components/Open';
import Layout from '@/components/Layout';

export default function Open() {
  return (
    <Layout>
      <section className="bg-primary">
        <div className="flex-col items-center max-w-6xl min-h-screen px-2 py-8 m-auto space-y-8">
          <div>
            <Stack />
          </div>
          <div>
            <Gear />
          </div>
          <div>
            <MRR />
          </div>
        </div>
      </section>
    </Layout>
  );
}
