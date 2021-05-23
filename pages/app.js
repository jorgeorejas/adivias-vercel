import Logo from '@/components/icons/Logo';
import Input from '@/components/ui/Input';

export default function SaaS() {
  return (
    <>
      <div className="min-h-screen bg-primary">
        <div className="flex flex-col ">
          <div className="sticky top-0 flex flex-row w-screen border-b bg-gray-50">
            <div className="w-1/6 px-10 py-4 text-center ">
              <Logo />
            </div>
            <div className="flex flex-row w-full h-full mx-4 my-auto">
              <div className="p-3 mx-4 text-base">
                <svg
                  className="w-6 h-6 m-auto stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <Input placeholder={Placeholder} className="rounded-full " />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/6 min-h-screen border-r ">
              <ul className="p-10 ">
                <li className="text-xl font-bold ">Dashboard</li>
                <ul className="py-2 pl-4 space-y-4 font-medium list-disc list-inside">
                  <li>Instagram</li>
                  <li>Instagram</li>
                  <li>Instagram</li>
                  <li>Instagram</li>
                </ul>
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
