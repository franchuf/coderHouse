import fetch from "node-fetch";


const episodios = fetch('https://rickandmortyapi.com/api/character/11')

episodios
    .then(res=>res.json())
    .then(res=>console.log(res))