import {gql} from "@apollo/client"

export const CREATE_USER = gql`
	mutation createUser(
		$userName: String!, $password: String!, $email: String!, $address: String!, $image: String!){
		createUser(
			userName: $userName
			password: $password
			email: $email
			address: $address
			image: $image
		){
			status
			message
		}
	}
`



export const DELETE_USER = gql`
	mutation deleteUser($id: ID!){
		deleteUser(id: $id){
			status
			message
		}
	}
`