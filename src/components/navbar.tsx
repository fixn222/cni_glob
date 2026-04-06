// Responsive refresh: the navigation now uses a mobile-safe menu trigger and softer hover motion.
import { motion } from "motion/react";
import { Brain, Menu } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CLIENT_NAV } from "../lib/constants";

const NavBar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-[1.5rem] border border-white/10 bg-background/80 px-4 py-3 shadow-lg backdrop-blur-xl sm:px-5">
        <a href="/" className="flex items-center gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5">
            <Brain className="size-5" />
          </div>
          <p className="text-base font-bold tracking-[0.18em] sm:text-lg">
            CNI GLOBAL
          </p>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {CLIENT_NAV.map((nav) => (
            <a
              key={nav.title}
              href={nav.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-foreground"
            >
              {nav.title}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="mr-0" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2">
              {CLIENT_NAV.map((nav) => {
                const Icon = nav.icon;

                return (
                  <DropdownMenuItem
                    key={nav.title}
                    asChild
                    className="rounded-xl px-3 py-3"
                  >
                    <a href={nav.href} className="flex items-center gap-3">
                      <Icon size={18} />
                      <span>{nav.title}</span>
                    </a>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
