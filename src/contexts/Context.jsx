import React, { createContext } from "react"

export const Context = createContext()

const ContextProvider = (props) => {
    const products = [
        { id: 1, name: "mayo1", price: 12, img: "n" },
        { id: 2, name: "mayo2", price: 13, img: "f" },
    ]
    const store = {
        testo: "456789",
        products,
    }

    return <Context.Provider value={store}>{props.children}</Context.Provider>
}

export default ContextProvider
