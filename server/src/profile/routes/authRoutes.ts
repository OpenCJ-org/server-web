import express from "express";
import { createUser } from "../controllers/authController";

export const authRoutes = express.Router();

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: User authentication
 * /api/profile/auth/signup
 *  post:
 *    tags: [Auth]
 */
authRoutes.post("/signup", async (req, res) => {
  const user = await createUser();

  res.send(user);
});
