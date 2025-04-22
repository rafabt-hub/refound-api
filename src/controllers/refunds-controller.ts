import { Request, Response } from "express"
import { prisma } from "@/database/prisma"
import { AppError } from "@/utils/AppError"
import { z } from "zod"

const CategoriesEnum = z.enum([
  "food",
  "others",
  "services",
  "transport",
  "accomodation"
])

class RefundsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(1, { message: "Informe o nome da solicitação."}),
      category: CategoriesEnum,
      amount: z.number().positive({ message: "O valor precisa ser positivo."}),
      filename: z.string().min(20),
    })

    const { name, category, amount, filename } = bodySchema.parse(request.body)

    if(!request.user?.id){
      throw new AppError("Unauthorized", 401)
    }

    const refund = await prisma.refunds.create({
      data: {
        name,
        category,
        amount,
        filename,
        userId: request.user.id,
      },
    })

    response.status(201).json(refund)
  }

  async index(request: Request, response: Response) {
    response.json({ message: "ok"})
  }
}

 


export { RefundsController }