import { useState } from "react";

const users = [
    { name: "Josephine", age: 30},
    { name: "Candice", age: 31},
    { name: "Barbara", age: 25 }
];

const UserSearch: React.FC = () => {

    const [name, setName] = useState("");

    const [user, setUser] = useState<{ name: string, age: number } | undefined >();

    const onClick = () => {
        const userFound = users.find((user) => {
            return user.name === name;
        });

        setUser(userFound);
    };
    
    return(
        <div>
            UserSearch
            <input 
                value={name} 
                onChange={e => setName(e.target.value)} 
            />

            <button 
                onClick={onClick}> 
                    Find User 
            </button>

            <div>
                <h1> {user?.name} </h1>
                <h2> {user?.age} </h2>
            </div>
        </div>
    )

}

export default UserSearch;