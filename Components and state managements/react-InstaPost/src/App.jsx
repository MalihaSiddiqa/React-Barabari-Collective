import React from 'react'
import Post from './components/post.jsx'
import image1Img from './images/image1.jpg'
import image2Img from './images/image2.jpg'
import image3Img from './images/image3.jpg'
import './App.css'

function App() {
  return(
  <div className='posts'>
    <h1>Mini Image Feed</h1>
    <Post image={image1Img} name="Tokyo Streets"></Post>
    <Post image={image2Img} name="Nobita's house"></Post>
    <Post image={image3Img} name="Mikasa stairs"></Post>

  </div>
  )  
}

export default App
