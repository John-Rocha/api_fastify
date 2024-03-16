import prismaClient from "../prisma";

interface IDeleteCustomerService {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: IDeleteCustomerService) {
    if (!id) {
      throw new Error("ID is required");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Customer not found");
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: "Customer deleted successfully" };
  }
}

export { DeleteCustomerService };
