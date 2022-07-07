import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser, resetUser } from '../../../redux/user/userActions'

const UserContainer = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state)
    const [input, setInput] = useState("")


    const addUserHandler = () => {
        dispatch(addUser(input))
        setInput("")
    }

    const removeUserHandler = () => {
        dispatch(removeUser(input))
        setInput("")
    }

    const resetUserHandler = () => {
        dispatch(resetUser())
        setInput("")
    }


    console.log(users)
  return (
    <div className="space-y-4">
        <h1 className="text-3xl"><strong>User Container</strong></h1>
        <input type="text" className="border border-gray-300 px-3 py-2 rounded-md w-1/2" value={input} onChange={(e) => setInput(e.target.value)} />
        <div className="flex flex-col space-y-2 w-1/2 mx-auto">
            <button className="bg-emerald-500 text-white px-3 py-2 rounded-md" onClick={addUserHandler} >Add User</button>
            <button className="bg-red-500 text-white px-3 py-2 rounded-md" onClick={removeUserHandler}>Remove User</button>
            <button className="bg-indigo-500 text-white px-3 py-2 rounded-md" onClick={resetUserHandler}>Reset User List</button>
        </div>
    </div>)
}

export default UserContainer