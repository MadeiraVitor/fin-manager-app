"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import dashboardIcon from "@/src/assets/dashboard-icon.png";
import transactionsIcon from "@/src/assets/transactions-icon.png";
import logo from "@/src/assets/logo.png";
import { Logout } from "./logout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const Sidebar = () => {
  const pathname = usePathname();

  const isDashboardActive = pathname === "/";
  const isTransactionsActive = pathname === "/transactions";

  const linkClassName = (isActive: boolean) =>
    `flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
      isActive
        ? "bg-[#10B981] text-white"
        : "text-[#94A3B8] hover:bg-[#223149] hover:text-white"
    }`;

  return (
    <aside
      className={`${inter.className} flex w-64 flex-col border-r border-[#2f3c52] bg-[#182132] text-[#F1F5F9]`}
    >
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="bg-[#10B981] rounded-xl py-4 px-2.5">
          <Image src={logo} alt="logo" />
        </div>
        <p className="text-xl font-bold leading-5 tracking-tight">FinManager</p>
      </div>

      <nav className="flex flex-1 flex-col gap-2 px-4 py-4">
        <Link href="/" className={linkClassName(isDashboardActive)}>
          <Image src={dashboardIcon} alt="dashboard" />
          <span className="text-base font-medium leading-normal">
            Dashboard
          </span>
        </Link>

        <Link
          href="/transactions"
          className={linkClassName(isTransactionsActive)}
        >
          <Image src={transactionsIcon} alt="transactions" />
          <span className="text-base font-medium leading-normal">
            Transações
          </span>
        </Link>
      </nav>

      <div className="border-t border-[#2f3c52] px-6 py-6">
        <Logout />
      </div>
    </aside>
  );
};
