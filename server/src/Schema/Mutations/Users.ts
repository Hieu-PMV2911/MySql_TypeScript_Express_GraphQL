import {GraphQLList, GraphQLID, GraphQLString,GraphQLInt} from "graphql"
import { UserType } from "../TypeDefs/Users"
import { Users } from "../../Entities/Users";
import { MessageType} from "../TypeDefs/Message";

export const CREATE_USER = {
	type: MessageType,
	args: {
		userName: {type: GraphQLString},
		email: {type: GraphQLString},
		password: {type: GraphQLString},
		address: {type: GraphQLString},
		image: {type: GraphQLString},
	},
	async resolve(parent: any, args: any) {
		const {userName, email, password, address, image} = args;
		await Users.insert({userName, email, password, address, image});
		return {status: true, message: "Create User Successfully"};
	}
}

export const DELETE_USER = {
	type: MessageType,
	args: {
		id: {type: GraphQLID}
	},
	async resolve(parent: any, args: any) {
		const id= args.id;
		await Users.delete(id);
		return {status: true, message: "Delete User Successfully"};
	}
}

export const UPDATE_USER = {
	type: MessageType,
	args: {
		userNameNew: {type: GraphQLString},
		email: {type: GraphQLString},
		passwordNew: {type: GraphQLString},
		passwordOld: {type: GraphQLString},
		addressNew: {type: GraphQLString},
		imageNew: {type: GraphQLString},
	},
	async resolve(parent: any, args: any) {
		const {userNameNew, email, passwordNew, addressNew, imageNew,passwordOld} = args;
		const user = await Users.findOne({where:{email: email}});
		const passwordUser = user?.password;
		if(passwordOld === passwordUser) {
			await Users.update({email: email}, {userName: userNameNew, password: passwordNew, address: addressNew,image: imageNew });
			return {status: true, message: "Update User Successfully"}
		}else{
			return {status: false, message: "PASSWORD DO NOT MATCH"};
		}
	}
}
