import { Router } from "express";
import { login, register } from "../controllers/auth.ctrls.js";
const auth = Router();

auth.post("/login", login);
auth.post("/register", register);

export default auth;
