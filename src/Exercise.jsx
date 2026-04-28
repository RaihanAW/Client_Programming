import React, {useState, useEffect} from 'react'
import UserCard from './UserCard';
import {getUsers} from './Services';
/* UTS */
import PostCard from './PostCard';
import { postsData } from './postsData';

function Exercise() {
  /*
  const [users, setUsers] = useState([]);

  //const isNotJakarta = users.filter((user) => user.city!=="Jakarta");
  

  useEffect (() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data)
      } catch (error){
        console.error("[Component] Gagal Mendapatkan data:", error.message);
      }
    };
    fetchData();
  }, []);

  */

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-Special-Red2">
          Post Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:max-w-11/12 mx-auto">
          {postsData.map((id, index) => (
            <PostCard key={index} {...id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise
