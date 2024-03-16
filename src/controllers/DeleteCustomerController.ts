import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const deleteCustomerService = new DeleteCustomerService();

    await deleteCustomerService.execute({ id });

    reply.send();
  }
}

export { DeleteCustomerController };
