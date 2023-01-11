import express from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema/index";
import { Users } from "./Entities/Users";

const port = 3001;
const main = async () => {
	await createConnection({
		type: "mysql",
		database: "graphqlcrud",
		username: "root",
		password: "",
		logging: true,
		synchronize: true,
		entities: [Users],
	});

	const app = express();
	app.use(cors());
	app.use(express.json());

	app.use("/graphql", graphqlHTTP({
		schema,
		graphiql: true
	}));
	
	app.listen(port, () => {
		console.log("Server connect success port ",port);
	})
}

main().catch((err) => {
	console.log(err)
})