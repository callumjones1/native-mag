import { useState, useEffect } from 'react'
import img1 from '../White-Phebalium.jpg'
import img2 from '../banksia.jpg'
import img3 from '../White-Bottlebrush-Flower.jpg'
import img4 from '../Bottlebrush.jpg'
import img5 from '../Purple-Flowers.jpg'
import './BannerSlider.css'

const IMAGES = [img1, img2, img3, img4, img5]

export default function BannerSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="banner-slider">
      {IMAGES.map((src, i) => (
        <div
          key={i}
          className={`banner-slide${i === current ? ' active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  )
}
