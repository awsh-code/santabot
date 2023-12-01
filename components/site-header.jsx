// import Link from "next/link"

import { siteConfig } from "@/config/site";
// import { buttonVariants } from "@/components/ui/button"
// import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav";
import { readUserSession } from "@/lib/actions";
import { UserNav } from "./user/user-nav";
import { Button } from "./ui/button";
import Link from "next/link";
// import { ThemeToggle } from "@/components/theme-toggle"

export async function SiteHeader() {
  const { data } = await readUserSession();
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <ThemeToggle /> */}
            {data?.session ? (
              <UserNav />
            ) : (
              <Button asChild>
                <Link href="/auth-server-action">Sign in</Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
