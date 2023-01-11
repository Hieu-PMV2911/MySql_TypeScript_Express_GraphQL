import {GraphQLObjectType, GraphQLBoolean, GraphQLString} from "graphql"

export const MessageType = new GraphQLObjectType({
	name: "Message",
	fields: () =>({
		status: {type: GraphQLBoolean},
		message: {type: GraphQLString},
	})
})