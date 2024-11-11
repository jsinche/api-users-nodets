import { UserRepository } from "@repositories/userRepository";
import { UserService } from "@services/userService";
import { Request, Response, Router } from "express";
import { IUserRepository, IUserService } from "types/UsersTypes";

const router = Router();
const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export default () => {
    router.get("/users", async (req: Request, res: Response) => {
        const users = await userService.findAllUsers();
        res.status(200).json(users);
    });

    router.get("/users/:id", async (req: Request, res: Response) => {
        const user = await userService.findUserById(req.params.id);
        res.status(200).json(user);
    });

    router.post("/users", async (req: Request, res: Response) => {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    });

    router.put("/users/:id", async (req: Request, res: Response) => {
        const user = await userService.updateUser(req.params.id, req.body);
        res.status(200).json(user);
    });

    router.delete("/users/:id", async (req: Request, res: Response) => {
        const deleted = await userService.deleteUser(req.params.id);
        res.status(200).json(deleted);
    });

    return router;
}