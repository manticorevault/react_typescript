import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";

const App = () => {
    return <div>
        <h1>
            <GuestList />
        </h1>
    </div>
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);