import express from "express";
import { createUser } from "../controllers/authController";
import { z } from "zod";

export const authRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication
 * /api/profile/auth/signup:
 *  post:
 *    tags: [Auth]
 *    consumes:
 *       - application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *            - userName
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *            userName:
 *              type: string
 *    responses:
 *     201:
 *      description: Created
 *
 */
authRoutes.post("/signup", async (req, res) => {
  try {
    const bodyParams = z
      .object({
        email: z.string().email(),
        password: z.string().nonempty().min(6).max(64),
        userName: z.string().nonempty().max(50),
      })
      .parse(req.body);

    const user = await createUser(
      bodyParams.email,
      bodyParams.password,
      bodyParams.userName
    );

    res.send(user);
  } catch (e) {
    res.status(400).send({ error: e });
  }
});
