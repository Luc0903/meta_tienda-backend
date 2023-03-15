import User from "./userModel.js";
import { StatusCodes } from "http-status-codes";

export async function Register(req, res) {
  if (Object.values(req.body).includes(""))
    return res.json({ message: "Todos los campos deben ser completados" });

  const user = await User.create({ ...req.body });

  const token = user.createJWT();

  return res.status(StatusCodes.CREATED).send({ user, token });
}

export async function Login(req, res) {
  if (Object.values(req.body).includes(""))
    return res.json({ message: "Todos los campos deben ser completados" });

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) res.send("Invalid Credentials");

  const isPasswordCorrect = await user.comparePasswords(password);
  if (!isPasswordCorrect) res.send("Invalid Credentials");

  const token = user.createJWT();

  return res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
}
