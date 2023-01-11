import {GraphQLList,GraphQLString,GraphQLInt} from "graphql"
import { UserType } from "../TypeDefs/Users"
import {Users} from "../../Entities/Users"
export const GET_ALL_USERS = {
	type: new GraphQLList(UserType),
	resolve() {
		return Users.find();
	}
}

export const GET_USER = {
	type: new GraphQLList(UserType),
	args: {
		id: {type: GraphQLInt},
	},
	resolve(parent: any, args: any) {
		const id = args.id
		return Users.find({where:{id: id}});
	}
}