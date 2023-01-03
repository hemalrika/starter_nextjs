import { Inter } from '@next/font/google'
import React from 'react'
import Layout from './layout'

export default function Home({props}) {
  return (
    <React.Fragment>
      <main>
        <Layout/>
      </main>
    </React.Fragment>
  )
}
