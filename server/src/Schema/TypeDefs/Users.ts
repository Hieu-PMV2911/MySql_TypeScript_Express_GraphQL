import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql"

export const UserType = new GraphQLObjectType({
	name: "Users",
	fields: () =>({
		id: {type: GraphQLID},
		userName: {type: GraphQLString},
		email: {type: GraphQLString},
		password: {type: GraphQLString},
		address: {type: GraphQLString},
		image: {type: GraphQLString},
	})
})