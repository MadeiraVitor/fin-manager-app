import Image from "next/image"
import PigIcon from "@/src/assets/pig-icon.png"

export const FinancialMetricCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#182132] rounded-2xl py-6 px-4">
      <div className="mb-4 p-4 bg-[#10B981]/20 rounded-full">
        <Image src={PigIcon} alt="Pig Icon" />
      </div>
      <h4 className="text-lg font-bold mb-2">Economia do mês</h4>
      <p className="text-3xl font-bold text-[#10B981] mb-2">+12%</p>
      <p className="text-center text-xs text-[#64748B]">Você economizou R$ 120,00 a mais que no mês
      passado.</p>
    </div>
  )
}