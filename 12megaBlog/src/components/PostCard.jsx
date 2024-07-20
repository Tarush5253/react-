
import React from 'react'
import appwriteService from "../appwrite/service"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

  return (
    <Link to={`/post/${$id}`}>
      <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div className='w-full justify-center mb-4'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}


export default PostCard
