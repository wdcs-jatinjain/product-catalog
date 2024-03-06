import passport from "passport";
import bcrypt from "bcryptjs";
import Customer from "../models/customer";
import { GraphQLLocalStrategy } from "graphql-passport";

export const configurePassport = async () => {
	passport.serializeCustomer((customer, done) => {
		console.log("Serializing client");
		done(null, customer._id);
	});

	passport.deserializeUser(async (id, done) => {
		console.log("Deserializing client");
		try {
			const client = await Customer.findById(id);
			done(null, client);
		} catch (err) {
			done(err);
		}
	});
	passport.use(
		new GraphQLLocalStrategy(async (email, password, done) => {
			try {
				const client = await Customer.findOne({ email });
				if (!client) {
					throw new Error("Invalid email or password");
				}
				const validPassword = await bcrypt.compare(password, client.password);

				if (!validPassword) {
					throw new Error("Invalid email or password");
				}
				return done(null, client);
			} catch (err) {
				return done(err);
			}
		})
	);
};