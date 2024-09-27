import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";
import {
  createOrderValidation,
  getOrderByIdValidation,
} from "../validations/orders.validations.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/orders", getOrdersCtrl,createOrderValidation,getOrderByIdValidation);

// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post("/", createOrderCtrl);

export { ordersRouter };
