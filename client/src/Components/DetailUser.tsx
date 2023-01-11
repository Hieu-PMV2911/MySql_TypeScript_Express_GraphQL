import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_USERS, GET_USER } from '../GraphQL/Queries'

const DetailUser = () => {
	const id:any = localStorage.getItem('users')
	const users = JSON.parse(id);
	// const {data} = useQuery(GET_USER);
	console.log(users)
	return (
		<div style={{paddingTop:"60px"}}>
				<div className="card">
					<img src={users.image} alt="" style={{width:"100%"}}/>
					<h1>{users.userName}</h1>
					<p className="title">{users.address}</p>
					<p>{users.email}</p>
					<p><button style={{backgroundColor:"red", height:"100%"}}
					// onClick={()=>{handleClickDetail(item)}}
					>
						Delete
					</button></p>
				</div>
		</div>
	)
}

export default DetailUser