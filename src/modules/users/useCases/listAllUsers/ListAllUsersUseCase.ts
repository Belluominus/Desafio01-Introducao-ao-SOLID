import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userValidation = this.usersRepository.findById(user_id);

    if (!userValidation) {
      throw new Error("User Don't Existis");
    } else if (!userValidation.admin) {
      throw new Error("Missing Permission");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
