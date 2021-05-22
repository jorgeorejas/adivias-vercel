import MacOS from '@/components/ui/MacOS';

export function Stack() {
  return (
    <MacOS title="The Stack" close="/#">
      <div className="px-2 py-4 transition-shadow border rounded shadow hover:shadow-lg">
        <h1>Sint duis occaecat amet ea.</h1>
      </div>
    </MacOS>
  );
}

export function Gear() {
  return <MacOS title="My Gear" close="/#"></MacOS>;
}
