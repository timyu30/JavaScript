fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: {
        JSON.stringify({Pokemon: 'Ditto'
    })
    .then(res=>{
        if (res.ok) {
            console.log('success') 
            return res.json()
        }
        else {
            console.log('fail')
        }
    })//res.json returns another promise
    .then(data => console.log(data))
    .catch(error => console.log(error))

    //fetch always succeed unless there is a network error

