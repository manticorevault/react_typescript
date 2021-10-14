/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/require-render-return */
import { Component } from "react";

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[]
}

interface UserSearchState {
    name: string,
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: "",
        user: undefined
    };

    onClick = () => {
        const userFound = this.props.users.find((user) => {
            return this.state.name
        });

        this.setState({ user: userFound });
    }

    render() {

        const { name, user } = this.state

        return(
            <div>
                UserSearch
                <input 
                    value={name} 
                    onChange={(e) => this.setState(e.target.value)} 
                />
    
                <button 
                    onClick={this.onClick}> 
                        Find User 
                </button>
    
                <div>
                    <h1> {user?.name} </h1>
                    <h2> {user?.age} </h2>
                </div>
            </div>
        )
    }
}

export default UserSearch;