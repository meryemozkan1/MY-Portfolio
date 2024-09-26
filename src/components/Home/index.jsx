import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

import Logo from './logo/index'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e', 'r', 'y', 'e', 'm']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer) // Temizlik fonksiyonu, zamanlayıcıyı temizler
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H </span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <span className="s-letter"> M</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
            <br />
          </h1>

          <h2>React Developer | Frontend Developer </h2>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="home-logo">
          <Logo />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
