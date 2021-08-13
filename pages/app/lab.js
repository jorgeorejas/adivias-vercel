import AppLayout from '@/components/AppLayout';
import Card from '@/components/ui/Card';
import * as temporary from '../../temporary.json';
export default function Accounts() {
  return (
    <>
      <AppLayout title="Lab">
        <div className="grid h-screen grid-cols-3 gap-2 py-2 overflow-auto">
          <Card className="shadow" />
          <Card className="shadow" />
          <Card className="flex flex-col row-span-2 p-2 overflow-auto shadow">
            2 Rows
          </Card>
          <Card className="shadow"></Card>
          <Card className="shadow" />
        </div>
      </AppLayout>
    </>
  );
}
