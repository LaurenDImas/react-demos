import React, {useContext, useState} from 'react'
import {UserContext} from "./UserContext.jsx";

const UpdateUser = () => {
    const {updateUser} = useContext(UserContext)
    const [newName, setNewName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newName.trim().length > 0){
            updateUser(newName);
            setNewName('')
        }
    }
    return (
        <div>
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter Name"/>

                <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default UpdateUser
