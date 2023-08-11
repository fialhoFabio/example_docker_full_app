import React, { useEffect } from 'react';
import axios from 'axios'
function App() {
    useEffect(() => {
        axios.get('http://nginx:80/api')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <div>
            <h1>Dados da API</h1>
        </div>
    );
}

export default App;
