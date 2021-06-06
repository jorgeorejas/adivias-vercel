import { useUser } from '@/utils/useUser';
import { useRouter } from 'next/router';
import AppLayout from '@/components/AppLayout';
import React from 'react';
import Card from '@/components/ui/Card';
import {
  ChatIcon,
  ThumbUpIcon,
  UserAddIcon,
  UserGroupIcon
} from '@heroicons/react/outline';
import PlaceholderChart from '@/components/ui/PhChart';

export default function SaaS() {
  const { userDetails } = useUser();
  const router = useRouter();

  var dateObj = new Date();

  // useEffect(() => {
  //   if (!user) router.replace('/signin');
  // }, [user]);

  return (
    <>
      <AppLayout title="Dashboard">
        <div className="grid w-full h-full min-h-screen grid-cols-1 gap-4 py-4 md:min-h-0 md:grid-rows-2 md:grid-cols-2 ">
          <Card className="flex flex-col w-full p-4 rounded-lg">
            <div className="flex items-center justify-between w-full ">
              <h1 className="font-semibold">Followers increment</h1>
              <h2 className="text-2xl font-bold">54</h2>
            </div>
            <div className="h-full">
              <PlaceholderChart className="" />
            </div>
          </Card>
          <Card className="grid grid-cols-2 grid-rows-2 gap-4 border-none ">
            <Card className="grid items-center grid-cols-2 grid-rows-2 border ">
              <div className="inline w-12 h-12 p-2 m-auto bg-secondary-2 rounded-2xl">
                <UserAddIcon />
              </div>
              <div className="m-auto">
                <h3 className="font-bold">12%</h3>
              </div>
              <div className="inline-flex flex-col items-center justify-center col-span-2 px-2 rounded-lg">
                <h2 className="text-2xl font-semibold">356</h2>
                <p className="text-xs font-semibold text-gray-500">Followers</p>
              </div>
            </Card>
            <Card className="grid items-center grid-cols-2 grid-rows-2 border ">
              <div className="w-12 h-12 p-2 m-auto bg-secondary-2 rounded-2xl">
                <UserGroupIcon />
              </div>
              <div className="m-auto">
                <h3 className="font-bold">-8%</h3>
              </div>
              <div className="inline-flex flex-col items-center justify-center col-span-2 px-2 rounded-lg">
                <h2 className="text-2xl font-semibold">446</h2>
                <p className="text-xs font-semibold text-gray-500">Following</p>
              </div>
            </Card>
            <Card className="grid items-center grid-cols-2 grid-rows-2 border ">
              <div className="inline w-12 h-12 p-2 m-auto bg-secondary-2 rounded-2xl">
                <ThumbUpIcon />
              </div>
              <div className="m-auto">
                <h3 className="font-bold">34%</h3>
              </div>
              <div className="inline-flex flex-col items-center justify-center col-span-2 px-2 rounded-lg">
                <h2 className="text-2xl font-semibold">45</h2>
                <p className="text-xs font-semibold text-gray-500">Likes</p>
              </div>
            </Card>
            <Card className="grid items-center grid-cols-2 grid-rows-2 border ">
              <div className="w-12 h-12 p-2 m-auto bg-secondary-2 rounded-2xl">
                <ChatIcon />
              </div>
              <div className="m-auto">
                <h3 className="font-bold">3%</h3>
              </div>
              <div className="inline-flex flex-col items-center justify-center col-span-2 px-2 rounded-lg">
                <h2 className="text-2xl font-semibold">12</h2>
                <p className="text-xs font-semibold text-gray-500">Comments</p>
              </div>
            </Card>
          </Card>
          <Card className="flex flex-col p-4 rounded-lg ">
            <div className="flex items-center justify-between w-full ">
              <h1 className="font-semibold">Followers increment</h1>
              <h2 className="text-2xl font-bold">54</h2>
            </div>
            <div className="h-full">
              <PlaceholderChart className="" />
            </div>
          </Card>
          <Card className="flex flex-col p-4 rounded-lg ">
            <div className="flex items-center justify-between w-full ">
              <h1 className="font-semibold">Followers increment</h1>
              <h2 className="text-2xl font-bold">54</h2>
            </div>
            <div className="h-full ">
              <PlaceholderChart className="" />
            </div>
          </Card>
        </div>
      </AppLayout>
    </>
  );
}
