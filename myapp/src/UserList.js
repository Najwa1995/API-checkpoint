import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
    const [listOfUSer, setListOfUSer] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setListOfUSer(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            {listOfUSer.map((user) => (
                <div key={user.id}>
                    <div className="card">
                        <h2>{user.name}</h2>
                        <div
                            className="line"
                            style={{ backgroundColor: user.id === 1 ? "red" : "yellow" }}
                        ></div>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Website: {user.website}</p>
                        <p>Works at: {user.company.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserList;