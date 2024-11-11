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
    findUserById(id: string): Promise<User | null> {
        return this.userRepository.findById(id);
    }
    updateUser(id: string, data: Partial<User>): Promise<User | null> {
        return this.userRepository.update(id, data);
    }
    deleteUser(id: string): Promise<boolean> {
        return this.userRepository.delete(id);
    }
}