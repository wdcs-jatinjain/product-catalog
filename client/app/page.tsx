'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

function Home() {

  const [message, setMessage] = useState("Loading")
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/home").then(
      response => response.json()
    ).then(
      data => {
        setMessage(data.message)
        setName(data.name)
      }
    )
  }, [])

  return (
    <div>
       <Link href="/admin">Admin Dashboard </Link>
       
      <div>{message}</div>
      {
        name.map((name, index) => (
          <div key={index}>
            {name}
          </div>
        ))
      }
    </div>
  )
}

export default Home