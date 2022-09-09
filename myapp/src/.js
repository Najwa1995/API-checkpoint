import axios from "axios";
import { useEffect, useState } from "react";

function UserList() {
    const [dataU, setDataU] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => { console.log(response); setDataU(response.data) })
            .catch((error) => console.log(error))
    });
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {dataU.map(el =>

                <div class="cards" style={{ width: '32%' }}>
                    <div class="card-content">
                        <div class="row">
                            <div class="left col">
                                <h2>{el.name} <strong>{el.username}</strong></h2>

                                <p>{el.email}</p>

                            </div>
                            <div class="right col">
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default UserList;