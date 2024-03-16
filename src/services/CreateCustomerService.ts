import prismaClient from "../prisma";

interface ICreateCustomerService {
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute({ name, email }: ICreateCustomerService) {
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });

    return customer;
  }
}

export { CreateCustomerService };
