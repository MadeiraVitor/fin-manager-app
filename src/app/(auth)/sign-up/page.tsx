"use client"

import { AuthLayout } from "../_components/auth-layout"
import Image from "next/image"
import ArrowIcon from "../../../assets/arrow-icon.png"
import { inputClass } from "../_styles/input";

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { authClient } from "@/src/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const signUpFormSchema = z.object({
  name: z.string().trim().nonempty("O nome é obrigatório"),
  email: z.string().nonempty("O e-mail é obrigatório"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres")
})

type SignUpFormData = z.input<typeof signUpFormSchema>

export default function SignUpPage() {
  const [apiError, setApiError] = useState<string>("")

  const router = useRouter()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "" as any,
      email: "" as any,
      password: "" as any
    },
    mode: "onBlur"
  })

  const onSubmit = async (data: SignUpFormData) => {
    console.log(data);
    try {
      const { data: result, error: err } = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: "/"
      })

      if (err) {
        setApiError(err.message ?? "Ocorreu um erro ao criar a conta. Tente novamente.")
        return
      }

      if (result) router.push("/")

      reset()  
    } catch (error) {
      setApiError("Erro inesperado. Tente novamente.")
    }  
  }

  return (
    <AuthLayout 
      title="Crie sua conta !"
      description="Preencha os dados para começar"
      footerText="Já tem uma conta?"
      footerLinkText="Entre aqui"
      footerHref="/sign-in"
    >
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-sm text-zinc-300 mb-2">Nome</label>
        <input
          type="text"
          placeholder="Seu nome completo"
          className={inputClass}
          {...register("name")}
        />

        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

        <label className="block text-sm text-zinc-300 mb-2">E-mail</label>
        <input
          type="email"
          placeholder="seu@email.com"
          className={inputClass}
          {...register("email")}
        />

        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

        <label className="block text-sm text-zinc-300 mb-2">Senha (mín. 8 caracteres)</label>
        <input
          type="password"
          placeholder="••••••••"
          className={inputClass}
          {...register("password")}
        />

        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}

        <button
          type="submit"
          className="w-full bg-[#10B981] flex items-center justify-center gap-2 font-semibold rounded-xl py-4 cursor-pointer"
          disabled={isSubmitting}
        >
          <span>Criar conta</span>
          <Image src={ArrowIcon} alt="Ícone de seta" />
        </button>
      </form>
    </AuthLayout>
  )
}