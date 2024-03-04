import Customer from "../../models/customer";
import bcrypt from 'bcryptjs'

const clientResolver = {
    Mutation: {
        signUp: async (_: any, { input }: any, context: { login: (arg0: any) => any; }) => {
            try {
                const { email, name, password, phone, city, address, country, zipCode } = input
                if (!email || !name || !password || !phone || !city || !address || !country || !zipCode) {
                    throw new Error("All fields are required")

                }
                const existingCustomer = await Customer.findOne({ email })
                if (existingCustomer) {
                    throw new Error("Customer already exists")
                }
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)

                const newCustomer = new Customer({
                    email, name, password: hashedPassword, phone, city, address, zipCode, country
                })
                await newCustomer.save()
                await context.login(newCustomer)
                return newCustomer
            } catch (err) {
                console.error("Error in signUp: ", err);
                throw new Error("Internal server error");
            }
        },
        login: async (_: any, { input }: any, context: { authenticate: (arg0: string, arg1: { email: any; password: any; }) => PromiseLike<{ customer: any; }> | { customer: any; }; login: (arg0: any) => any; }) => {
            try {
                const { email, password } = input
                if (!email || !password) throw new Error("All fields are required")
                const { customer } = await context.authenticate("graphql-local", { email, password })
                await context.login(customer)
                return customer
            } catch (err) {
                console.error("Error in login: ", err);
                throw new Error("Internal server error");
            }
        },
        logout: async (_: any, _: any, context: { logout: () => any; req: { session: { destroy: (arg0: (err: any) => void) => void; }; }; res: { clearCookie: (arg0: string) => void; }; }) => {
            try {
                await context.logout()
                context.req.session.destroy((err: any) => {
                    if (err) throw err
                })
                context.res.clearCookie("connect.sid")
                return { message: "Logout successful" }

            } catch (err) {
                console.error("Error in logout:", err);
                throw new Error("Internal server error");
            }
        },
        Query: {
            authClient: async (_: any, _: any, context: { getUser: () => any; }) => {
                try {
                    const client = await context.getUser()
                    return client
                } catch (err) {
                    console.error("Error in authUser: ", err);
                    throw new Error("Internal server error");
                }
            },
            client: async (_: any, { clientId }: any) => {
                try {
                    const client = await Customer.findById(clientId)
                    return client
                } catch (err) {
                    console.error("Error in user query:", err);
                    throw new Error("Error getting user");
                }
            }
        }


    }
}

export default clientResolver

