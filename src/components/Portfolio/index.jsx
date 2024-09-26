import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import db from '../../utils/db.json'
import ReactPlayer from 'react-player'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  console.log(db)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const portfolioItems = db.portfolioData

  const renderPortfolio = (portfolioItems) => {
    console.log(portfolioItems)
    return (
      <div className="video-container">
        {portfolioItems.map((item, key) => {
          console.log(item)
          return (
            <div className="video-box" key={key}>
              <div className="video">
                <ReactPlayer
                  url={item.video}
                  width={400}
                  height={400}
                  controls
                  muted
                  style={{
                    marginTop: 0,
                    marginBottom: 25,
                  }}
                />
              </div>
              <div className="content">
                <p className="title">{item.title}</p>
                <h4 className="description">{item.description}</h4>
                <button className="btn" onClick={() => window.open(item.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              strArray={'Portfolio'.split('')}
              letterClass={letterClass}
              idx={15}
            />
          </h1>

          <div className="port">{renderPortfolio(portfolioItems)}</div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
