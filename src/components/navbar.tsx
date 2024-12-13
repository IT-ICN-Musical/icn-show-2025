import ICNLogo from "@/_assets/logo.png";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Clapperboard, House, Info, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: <House width={20} />,
  },
  {
    name: "Store",
    href: "/store",
    icon: <Store width={20} />,
  },
  //   {
  //     name: "Show",
  //     href: "/show",
  //     icon: <Clapperboard width={20} />,
  //   },
  //   {
  //     name: "About Us",
  //     href: "/about-us",
  //     icon: <Info width={20} />,
  //   },
];

export function Navbar({
  className,
  desktopClassName,
  mobileClassName,
  landingMode,
}: {
  className?: string;
  desktopClassName?: string;
  mobileClassName?: string;
  landingMode?: boolean;
}) {
  return (
    <>
      <DesktopNavbar
        className={cn("hidden lg:flex", className, desktopClassName)}
        landingMode={landingMode}
      />
      <MobileNavbar className={cn("lg:hidden", className, mobileClassName)} />
    </>
  );
}

function DesktopNavbar({
  className,
  landingMode,
}: {
  className?: string;
  landingMode?: boolean;
}) {
  return (
    <nav
      className={cn(
        "flex flex-col items-center sticky top-0 z-40",
        landingMode ? "bg-none transition-transform duration-1000" : "bg-white",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-row justify-between items-center w-full max-w-3xl px-6 py-4 bg-white",
          landingMode ? "rounded-full mt-8" : "",
        )}
      >
        <Image src={ICNLogo} alt="ICN 2025 Musical" width={54} height={54} />
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "flex flex-row items-center gap-2",
                      )}
                    >
                      {item.icon}
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}

function MobileNavbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "flex flex-col items-center sticky top-0 px-6 py-4 bg-white z-50",
        className,
      )}
    >
      <div className="flex flex-row justify-between items-center w-full max-w-3xl">
        <Image src={ICNLogo} alt="ICN 2025 Musical" width={54} height={54} />
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <HamburgerMenuIcon className="w-6 h-6 hover:opacity-75" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navItems.map((item, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link
                    href={item.href}
                    className="py-2 flex flex-row gap-2 items-center focus:bg-accent focus:text-accent-foreground"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
