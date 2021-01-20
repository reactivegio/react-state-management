import React from "react";
import { Link } from "react-router-dom";
const GoBack: React.FC = () => {
    return (
        <Link to="/">
            <div style={{
                margin: "10px 0"
            }}>⟵ Back to the state management list</div>
        </Link>
    );
};

export default GoBack;

