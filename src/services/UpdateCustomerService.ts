import prismaClient from "../prisma";

interface IUpdateCustomerService {
  id: string;
  name: string;
  email: string;
  status: boolean;
}

class UpdateCustomerService {
  async execute({ id, name, email, status }: IUpdateCustomerService) {
    if (!id) {
      throw new Error("ID is required");
    }

    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id,
      },
    });

    if (!findCustomer) {
      throw new Error("Customer not found");
    }

    const customer = await prismaClient.customer.update({
      where: {
        id: findCustomer.id,
      },
      data: {
        name,
        email,
        status,
        updated_at: new Date(),
      },
    });

    return customer;
  }
}

export { UpdateCustomerService };
