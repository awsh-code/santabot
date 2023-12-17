import { Metadata } from "next";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/profile/sidebar-nav";

export const metadata = {
  title: "Account",
  description: "User profile settings",
};

const sidebarNavItems = [
  {
    title: "Account",
    href: "/profile",
  },
  {
    title: "Address",
    href: "/profile/address",
  },
  {
    title: "Orders",
    href: "/profile/orders",
  },
];

export default function SettingsLayout({ children }) {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
