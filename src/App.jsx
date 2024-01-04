import { useState } from 'react'
import './App.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(localStorage.getItem('cookie_consent') === 'true' ? false : true)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    "https://images.pexels.com/photos/14866387/pexels-photo-14866387.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", 
    "https://images.pexels.com/photos/5852610/pexels-photo-5852610.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/11858793/pexels-photo-11858793.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/18748879/pexels-photo-18748879/free-photo-of-backpacker-in-istnabul-by-bosphorus-strait.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/18428887/pexels-photo-18428887/free-photo-of-working-woman-bw.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  ]


  const handleClick = () => {
    localStorage.setItem('cookie_consent', true)
    setShowCookieConsent(false)
  }

  const handleUpdate = (way) => {
  
  
    if (way === 'next') {
      // Check if the current image is the last one
      if (currentImage === images.length - 1) {
        setCurrentImage(0)
      } else {
        setCurrentImage(currentImage + 1)
      }

    } else {
      // Check if the current image is the first one
      if (currentImage === 0) {
        setCurrentImage(images.length - 1)
      } else {
        setCurrentImage(currentImage - 1)
      }
    }
  }

  return (
    <>

    {/* Gallrty with buttons */}
    <div className='flex flex-col items-center justify-center'>
      <img
        src={images[currentImage]}
        className='object-cover'
        width={400}
        height={400}
        alt='random'
      />

      <div className='flex justify-center space-x-10 mt-5'>
        <button className='button' onClick={() => handleUpdate("back")}>
          <IoIosArrowBack />
        </button>
        <button className='button'onClick={() => handleUpdate("next")} >
          <IoIosArrowForward />
        </button>
        </div>
    </div>
 


      {showCookieConsent && (
        <div className='absolute bottom-0 w-full bg-gray-800 text-white text-center p-2'>
          <p className='text-sm'>
            This website uses cookies to ensure you get the best experience on
            our website.{' '}
            <button
              className='underline'
              onClick={handleClick}
            >
              Accept
            </button>
          </p>
        </div>
      )}
    </>
  )
}

export default App
