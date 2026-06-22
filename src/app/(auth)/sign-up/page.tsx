import { AuthLayout } from "../_components/auth-layout"
import Image from "next/image"
import ArrowIcon from "../../../assets/arrow-icon.png"
import { inputClass } from "../_styles/input";

export default function SignUpPage() {
  return (
    <AuthLayout 
      title="Crie sua conta !"
      description="Preencha os dados para começar"
      footerText="Já tem uma conta?"
      footerLinkText="Entre aqui"
      footerHref="/sign-in"
    >
      <form className="space-y-6">
        <label className="block text-sm text-zinc-300 mb-2">Nome</label>
        <input
          type="text"
          placeholder="Seu nome completo"
          className={inputClass}
        />

        <label className="block text-sm text-zinc-300 mb-2">E-mail</label>
        <input
          type="email"
          placeholder="seu@email.com"
          className={inputClass}
        />

        <label className="block text-sm text-zinc-300 mb-2">Senha (mín. 8 caracteres)</label>
        <input
          type="password"
          placeholder="••••••••"
          className={inputClass}
        />

        <button
          type="submit"
          className="w-full bg-[#10B981] flex items-center justify-center gap-2 font-semibold rounded-xl py-4 cursor-pointer"
        >
          <span>Criar conta</span>
          <Image src={ArrowIcon} alt="Ícone de seta" />
        </button>
      </form>
    </AuthLayout>
  )
}