import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Feed from './pages/Feed'
import PostDetails from './pages/PostDetails'
import UserProfile from './pages/UserProfile'
const App=()=>{

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={< Feed />} />
    <Route path='/post/:id' element={<PostDetails />} />
    <Route path='/user/:id' element={<UserProfile />} />
   </Routes>
   
   </BrowserRouter>
  )
}

export default App