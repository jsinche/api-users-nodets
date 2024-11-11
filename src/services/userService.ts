import { IUserRepository, IUserService, User } from "types/UsersTypes";

export class UserService implements IUserService {
    private userRepository: IUserRepository;
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }
    createUser(user: User): Promise<User> {
        return this.userRepository.create(user);
    }
    findAllUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }
}