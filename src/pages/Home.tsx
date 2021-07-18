import React from "react";

export const Home: React.FC<any> = () => {
    return (
        <React.Fragment>
            <h1>Home</h1>
            <div>
                <p>whats up</p>
                <label htmlFor="name">Name:</label>
                <input id="name" name="ss" />
            </div>
        </React.Fragment>
    );
};
