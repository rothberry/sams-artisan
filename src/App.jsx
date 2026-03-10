import { Routes, Route } from "react-router"
import "./styles/App.css"
import Home from "./containers/Home"
import Nav from "./components/Nav"
import About from "./components/About"
import NotFound from "./components/NotFound"
import ProductContainer from "./containers/ProductContainer"
import ContactContainer from "./containers/ContactContainer"

const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<ProductContainer />} />
                <Route path="contact" element={<ContactContainer />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
