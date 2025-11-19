import {useState} from "react";
import App from "../../App.jsx";

const Friend = () => {
    const [friends, setFriends] = useState(["Alex","John"]);

    const addOneFriend = () => setFriends([...friends, "Lauren"]);
    const removeFriend = () => setFriends(friends.filter(f => f !== 'John'));
    const updateOneFriend = () => {
        setFriends(friends.map(f => f === "Alex" ? "Alex Smith" : f));
    }

    return (
        <section>
            {friends.map((friend) => (
                // eslint-disable-next-line react-hooks/purity
                <li key={Math.random()}>{friend}</li>
            ))}

            <button onClick={addOneFriend}>Add New Friend</button>
            <button onClick={removeFriend}>Remove One Friend</button>
            <button onClick={updateOneFriend}>Update One Friend</button>
        </section>
    )
}

export default Friend;
