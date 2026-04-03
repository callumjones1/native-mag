import { Link } from 'react-router-dom'
import './Home.css'

const PRODUCTS = [
  {
    id: 1,
    name: 'Magnesium Body Spray',
    description: 'Fast-absorbing transdermal magnesium for muscle recovery and deep sleep.',
    price: 34.95,
    image: null,
  },
  {
    id: 2,
    name: 'Magnesium Foot Soak',
    description: 'Concentrated magnesium flakes for full-body relaxation and tired legs.',
    price: 29.95,
    image: null,
  },
  {
    id: 3,
    name: 'Magnesium Body Butter',
    description: 'Nourishing cream infused with magnesium chloride and natural botanicals.',
    price: 39.95,
    image: null,
  },
]

export default function Home() {
  return (
    <div className="home">
      <section className="banner" />

      <section className="catchphrase">
        <p>Feel better, naturally.</p>
      </section>

      <section className="product-grid-section">
        <div className="product-grid">
          {PRODUCTS.map(product => (
            <Link to="/products" className="product-card" key={product.id}>
              <div className="product-card__image">
                {product.image
                  ? <img src={product.image} alt={product.name} />
                  : <div className="product-card__placeholder" />
                }
              </div>
              <div className="product-card__body">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__desc">{product.description}</p>
                <span className="product-card__price">${product.price.toFixed(2)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
