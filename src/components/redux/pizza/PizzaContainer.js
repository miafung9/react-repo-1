import { useState } from "react"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { buyPizza, returnPizza, resetPizza } from "../../../redux/pizza/pizzaActions"


const PizzaContainer = () => {
    const numOfPizza = useSelector((state) => state.numOfPizza)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(0)

    const buyPizzaHandler = () => {
        dispatch(buyPizza(quantity))
        setQuantity(0)
    }

    const returnPizzaHandler = () => {
        dispatch(returnPizza(quantity))
        setQuantity(0)
    }

    const resetPizzaHandler = () => {
        dispatch(resetPizza())
        setQuantity(0)
    }

    return (
    <div className="space-y-4">
        <h1 className="text-3xl"><strong>Pizza Container</strong></h1>
        <div className="text-xl">Pizza in stock: {numOfPizza}</div>
        <input type="number" className="border border-gray-300 px-3 py-2 rounded-md w-1/2" min={0} max={10} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <div className="flex flex-col space-y-2 w-1/2 mx-auto">
            <button className="bg-emerald-500 text-white px-3 py-2 rounded-md" onClick={buyPizzaHandler} disabled={quantity === 0 ? true : false}>Buy Pizza</button>
            <button className="bg-red-500 text-white px-3 py-2 rounded-md" onClick={returnPizzaHandler} disabled={quantity === 0 ? true : false}>Return Pizza</button>
            {numOfPizza !== 100 && <button className="bg-indigo-500 text-white px-3 py-2 rounded-md" onClick={resetPizzaHandler}>Reset Number Of Pizza</button> }
        </div>
    </div>)
}

export default PizzaContainer