import { ChildComponent } from "./Child";

const Parent = () => {
    return <ChildComponent color="green" onClick={() => console.log("Clicked!")}>
        Text!
    </ChildComponent>
};

export default Parent;