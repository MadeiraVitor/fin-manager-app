import Image from "next/image";
import bulbIcon from "@/src/assets/bulb-icon.png";
import insightsIcon from "@/src/assets/insights-icon.png";
import starIcon from "@/src/assets/star-icon.png";
import refreshIcon from "@/src/assets/refresh-icon.png";

export const AiInsights = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Image src={starIcon} alt="AI Icon" />
        <h3 className="text-xl font-bold">Insights com IA</h3>
      </div>

      <div className="bg-[#F43F5E]/18 p-6 rounded-2xl flex items-center gap-4">
        <div className="bg-[#F43F5E]/20 p-4 rounded-xl">
          <Image src={insightsIcon} alt="Insights Icon" />
        </div>

        <div>
          <p className="font-bold">Categoria com maior gasto</p>
          <p className="text-sm text-[#94A3B8]">Alimentação: <span className="font-semibold text-[#F43F5E]">R$ 42,00</span></p>
        </div>
      </div>

      <div className="bg-[#10B981]/15 p-6 rounded-2xl flex items-center gap-4">
        <div className="bg-[#10B981]/20 p-4 rounded-xl">
          <Image src={bulbIcon} alt="Bulb Icon" />
        </div>

        <div>
          <p className="font-bold">Sugestão de economia</p>
          <p className="text-sm text-[#94A3B8]">
            Para economizar em alimentação, cozinhe mais em casa. Planeje as
            refeições e leve marmita.
          </p>
        </div>
      </div>

      <button className="flex items-center justify-center gap-3 w-full border border-white/20 py-4 rounded-2xl cursor-pointer hover:border-[#10B981] transition-colors duration-300">
        <Image src={refreshIcon} alt="Refresh Icon" />
        <span>Atualizar Insights</span>
      </button>
    </div>
  );
};
