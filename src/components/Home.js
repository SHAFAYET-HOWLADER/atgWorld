import React from 'react'
import Banner from './Banner'
import DisplayPost from './DisplayPost'
import Menu from './Menu'
import SingInModal from './SingInModal'

const Home = () => {
  return (
    <>
       <Menu/>
       <Banner/>
       <DisplayPost/>
       <SingInModal/>
    </>
  )
}

export default Home