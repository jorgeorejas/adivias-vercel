import AppLayout from '@/components/AppLayout';

import Card from '@/components/ui/Card';
import { FollowersList } from '@/utils/twitter';
import { map } from 'bluebird';
export default function Accounts() {
  return (
    <>
      <AppLayout title="Lab">
        <div className="grid h-screen grid-cols-1 gap-2 py-2 overflow-auto md:grid-cols-3">
          <Card className="shadow" />
          <Card className="shadow" />
          <Card className="flex flex-col row-span-2 p-2 overflow-auto shadow">
            2 Rows
          </Card>
          <Card className="shadow"></Card>
          <Card className="shadow"></Card>
        </div>
      </AppLayout>
    </>
  );
}
