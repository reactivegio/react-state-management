import React from "react";

const EmptyList: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
            }}
        >
            <div>NO TASK FOUND</div>
        </div>
    );
};

export default EmptyList;
