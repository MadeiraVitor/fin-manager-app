import {
  TransactionType,
  TransactionCategory,
  TransactionPaymentMethod,
} from "@prisma/client";

import { z } from "zod";

export const createTransactionFormSchema = z.object({
  name: z.string().trim().nonempty("O título é obrigatório"),
  amount: z.coerce.number().positive({ error: "O valor deve ser positivo" }),
  type: z.enum(TransactionType, { error: "O tipo de transação é obrigatório" }),
  category: z.enum(TransactionCategory, { error: "A categoria é obrigatória" }),
  paymentMethod: z.enum(TransactionPaymentMethod, {
    error: "O método de pagamento é obrigatório",
  }),
  date: z.coerce.date(),
});

export type CreateTransactionFormData = z.input<typeof createTransactionFormSchema>;