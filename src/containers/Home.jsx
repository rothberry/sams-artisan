import { useContext } from "react"
import { Context } from "../contexts/Context"

const Home = () => {
    const context = useContext(Context)
    return (
        <div>
            Home
            {context.testo}
        </div>
    )
}

export default Home
