'use client'

import { useEffect, useState } from "react";

function Page() {

  const [message, setMessage] =useState('loading')
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then(
      data => {
        setMessage(data.message)
        setPeople(data.name)
      }
    )
  }, [])

  return (
    <div>
      <div>{message}</div>
      {
        people.map((name, index) => (
          <div key={index}>
            {name}
          </div>
        ))
      }
    </div>
  )
}

export default Page