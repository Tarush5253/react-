import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(){
    const data = useLoaderData();
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Tarush5253')
    //     .then(res => res.json())
    //     .then(res => setData(res))
    //     console.log(data);
    // })

    return(
        <div className='text-center bg-gray-600 text-white m-4 p-4 text-3xl'>Followers : { data.followers}
        <img src={data.avatar_url} alt="github photo" width={300} /> 
        <p>please follow me on github account!</p>
        </div>
    )
}

export default Github

export const githubInfoLoader = async()=>{
    const result = await fetch('https://api.github.com/users/Tarush5253')
    return result.json()
}