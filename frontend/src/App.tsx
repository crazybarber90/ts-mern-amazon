import { Container, Navbar, Nav } from 'react-bootstrap'
import { sampleProducts } from './data'

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>tsamazon</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Cart
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer>All Right Reserved</footer>
    </div>
  )
}

export default App
