import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({title}) => {
  return (
    <div>
        <h1>{title}</h1>
        <nav>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>{title}</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Breadcrumb