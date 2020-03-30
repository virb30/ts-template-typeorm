import { Request, Response } from 'express';

class ExampleController {
  async store(req: Request, res: Response): Promise<Response> {}
}

export default new ExampleController();
