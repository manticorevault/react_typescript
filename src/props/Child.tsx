interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            { color }
            <button onClick={onClick}> Click here! </button>
        </div>
    )
};

export const ChildComponent: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return (
        <div>
            { color }
            { children }
            <button onClick={onClick}> Click here! </button> 
        </div>
    )
}; 