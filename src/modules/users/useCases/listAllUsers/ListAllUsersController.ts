import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id: string = request.headers.user_id as string;

      console.log(user_id);

      const all = this.listAllUsersUseCase.execute({ user_id });

      return response.json(all);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).send();
    }
  }
}

export { ListAllUsersController };
