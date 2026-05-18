import React, { useState } from 'react'

function PostCard(props) {
    const {id, userId, title, body} = props;
    const [clicked, setClicked] = useState(false);
  return (
    <div className="bg-white p-6 rounded-lg shadow h-auto hover:bg-red-50 hover:border-2 hover:scale-110">
      <div className='flex flex-col h-full items-center text-center'>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">
            <span className="font-medium">{body}</span> 
        </p>
        <button className={`${clicked ? "bg-Special-Red2 hover:saturate-200" : "bg-gray-600 hover:bg-gray-400"} text-white p-2 rounded-md mt-auto`}
            onClick={() => setClicked(true)}
        >
            {clicked ? "Tombol Sudah Di Klik" : "Silahkan Klik"}
        </button>
      </div>

    </div>
  )
}

export default PostCard

