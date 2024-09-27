// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ

import { check } from "express-validator";

export const createOrderValidation = [
    check("coffee").isString(),
    check("userId").isString(),
];

export const getOrderByIdValidation = [
    check("id").isString(),
    check("userId").isString(),
];
