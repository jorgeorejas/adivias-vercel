import { Stack, Gear } from '@/components/Open';

export default function Open() {
  return (
    <section className="bg-primary">
      <div className="flex-col items-center max-w-6xl min-h-screen px-2 py-8 m-auto space-y-8">
        <Stack />
        <Gear />
      </div>
    </section>
  );
}
