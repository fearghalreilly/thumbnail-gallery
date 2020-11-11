import React, {useState, useEffect} from 'react'
import './ThumbNailGallery.styles.css'
import ActiveThumbNailWindow from '../ActiveThumbNailWindow/ActiveThumbNailWindow.component'
import ThumbNailGrid from '../ThumbNailGrid/ThumbNailGrid.component'
import axios from 'axios'


const ThumbNailGallery = () => {
    const [thumbnails, setThumbnails] = useState([]) 
    const [activeIndex, setActiveIndex] = useState(0) 
    const [number, setNumber] = useState(0)

    useEffect(() => {
        axios
          .get(
            'https://gist.githubusercontent.com/DZuz14/56b7f363e9787fb4c0240eb145bc2b9f/raw/e0b67d18352704d155929b7e27e0dae08cc383b6/data.json'
          )
          .then(res => setThumbnails(res.data.thumbnails))
      }, [])



const handleClick = e => {
    const activeIndex = e.target.getAttribute('data-index')
    setActiveIndex(activeIndex)
    
}



const nextSlide = () => {
    
    setActiveIndex((+activeIndex) +1)
}



    return (
        <div className='gallery-section'>
            <ActiveThumbNailWindow activeThumbnail={thumbnails[activeIndex]} />
            <ThumbNailGrid thumbnails={thumbnails} onClick={handleClick} />
            <button className='test' onClick={nextSlide} ></button>
   
        </div>

    )
}

export default ThumbNailGallery