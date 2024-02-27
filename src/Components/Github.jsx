import React, { useEffect, useState } from 'react' ;
import { Link } from 'react-router-dom';

const Github = () => {

	// Fast API Calls --> used --> Loading --> react router dom

	const [data, setData] = useState([]) ;

	useEffect( () =>{
		fetch('https://api.github.com/users/ambresh20')
		.then(response => response.json())
		.then( data => {
			console.log(data) ;
			setData(data) ;
		})

	}, [] ) ;

	const created = data.created_at ;
	const updated = data.updated_at ;

  return (

	<div className='my-20 bg-gray-600 text-white p-4 flex justify-evenly gap-9 '>
		{/* GitHub  */}
	    <div className=''>
            <img 
			className='rounded-2xl p-2 my-2 '
			src={data.avatar_url} alt="Git pic" width={300} />
			<p className='text-3xl font-bold'>{data.name} </p>
			<p className='pl-9'>{data.login}</p>
			<p className='text-xl font-semibold'>{data.bio}</p>
	        <p className='text-blue-300 '> {data.location} </p>
	    </div>

	    <div className='p-6 leading-loose text-xl text-red-200 '>
		    <p>Followers: {data.followers} </p>
	        <p>Following: {data.following} </p>
			<p>Repositories: {data.public_repos} </p>
			<p>Created At: {created}</p>
			<p>Updated At: {updated} </p>
			<button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 m-5'>
				<Link to={data.html_url}>
				    Read More
				</Link>
			</button>
	    </div>

    </div>

  ) ;
}

export default Github ;
