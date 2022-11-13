import { Router } from "express";
import { UserController } from "./controller";
import { authenticateUser } from "../middlware/authentication";
import Container from "typedi";

const router = Router()
const controller = Container.get(UserController);


router.route('/users')
      .get(authenticateUser, controller.getUsers)

router.route('/user/:id')
      .get(controller.getUser)

router.route('/user/signup')
      .post(controller.signup)

router.route('/user/login')
      .post(controller.login)

export default router;