import {gql} from "@apollo/client"

export const GET_ALL_USERS = gql`
	query getAllUser{
		getAllUser{
			id
			userName
			password
			email
			address
			image
		}
	}
`

export const GET_USER = gql`
	query getUser($id:number){
		getAllUser(id: $id){
			id
			userName
			password
			email
			address
			image
		}
	}
`