import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {
  return (
    <div>{redirect('/login')}</div>
  )
}
