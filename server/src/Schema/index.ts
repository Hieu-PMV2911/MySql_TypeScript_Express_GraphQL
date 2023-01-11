import {GraphQLSchema, GraphQLObjectType} from "graphql"
import { GET_ALL_USERS, GET_USER } from "./Queries/Users"
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/Users"

const RootQuery = new GraphQLObjectType({
	name: "RootQuery",
	fields:{
		getAllUser : GET_ALL_USERS,
		getUser: GET_USER,
	}
})

const RootMutation = new GraphQLObjectType({
	name: "RootMutation",
	fields:{
		createUser: CREATE_USER,
		deleteUser: DELETE_USER,
		updateUser: UPDATE_USER
	}
})


export const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation
})