import Image from "next/image";
import { Inter } from "next/font/google";

import dashboardIcon from "@/src/assets/dashboard-icon.png";
import transactionsIcon from "@/src/assets/transactions-icon.png";
import logoutIcon from "@/src/assets/logout-icon.png";
import logo from "@/src/assets/logo.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const Sidebar = () => {
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
        <a
          href="#"
          className="flex w-full items-center gap-3 rounded-xl bg-[#10B981] px-4 py-3 text-white"
        >
          <Image src={dashboardIcon} alt="dashboard" />
          <span className="text-base font-medium leading-normal">
            Dashboard
          </span>
        </a>

        <a
          href="#"
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[#94A3B8]"
        >
          <Image src={transactionsIcon} alt="transactions" />
          <span className="text-base font-medium leading-normal">
            Transações
          </span>
        </a>
      </nav>

      <div className="border-t border-[#2f3c52] px-6 py-6">
        <a
          href="#"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#94A3B8]"
        >
          <Image src={logoutIcon} alt="logout" />
          <span className="text-base font-medium leading-normal text-center">
            Sair
          </span>
        </a>
      </div>
    </aside>
  );
};
