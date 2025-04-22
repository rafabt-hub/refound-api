import { Router } from "express"
import { UploadsController } from "@/controllers/uploads-controller"
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization"

const uploadsRoutes = Router()
const uploadsController = new UploadsController()

uploadsRoutes.use(verifyUserAuthorization(["employee"]))
uploadsRoutes.post("/", uploadsController.create)

export { uploadsRoutes }