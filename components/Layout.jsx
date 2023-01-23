import React from 'react'
import FeaturedPosts from '../sections/FeaturedPosts'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <FeaturedPosts/>
        {children}
    </>
  )
}

export default Layout