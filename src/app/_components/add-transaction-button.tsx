"use client";

import { useState } from "react";

import Image from "next/image";
import plusIcon from "@/src/assets/plus-icon.png";
import confirmIcon from "@/src/assets/confirm-icon.png";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/src/app/_components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";

export const AddTransactionButton = () => {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <section>
      <Dialog open={open} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            type="button"
            className="rounded-sm bg-[#10B981] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transaction-colors flex items-center gap-2 cursor-pointer"
          >
            <Image src={plusIcon} alt="Plus Icon" />
            <p>Adicionar</p>
          </button>
        </DialogTrigger>

        <DialogContent className="bg-[#182132]">
          <DialogHeader className="p-2 border-b border-white/20">
            <DialogTitle className="font-semibold text-lg">Nova transação</DialogTitle>
          </DialogHeader>

          <form className="flex flex-col gap-4 pt-4">
            <div className="space-y-2">
              <Label className="font-medium text-sm text-[#CAD5E2]">Título</Label>
              <Input id="name" placeholder="Ex: Almoço, Freela..." />
            </div>
            <div className="space-y-2">
              <Label className="font-medium text-sm text-[#CAD5E2]">Valor (R$)</Label>
              <Input id="amount" type="number" placeholder="0,00" />
            </div>
            <div className="space-y-2">
              <Label className="font-medium text-sm text-[#CAD5E2]">Tipo</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>

                <SelectContent>
                  
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="font-medium text-sm text-[#CAD5E2]">Categoria</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>

                <SelectContent>
                  
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="font-medium text-sm text-[#CAD5E2]">Método de pagamento</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>

                <SelectContent>
                  
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="font-medium text-sm text-[#CAD5E2]">Data</Label>
              <Input id="date" placeholder="__/__/____" />
            </div>

            <DialogFooter className="gap-4 border-none">
              <button className="border border-[#CAD5E2] rounded-lg w-1/3 py-2.5 cursor-pointer">Cancelar</button>
              <button className="bg-[#10B981] w-2/3 flex items-center justify-center gap-2 rounded-lg cursor-pointer">
                <Image src={confirmIcon} alt="Confirm Icon" />
                <p className="font-semibold text-sm">Salvar transação</p>
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};
