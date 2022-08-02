document.querySelector('button').addEventListener('click', apiRequest)
  

async function apiRequest(){
    const beachName = document.querySelector('input').value
    try {
        const response = await fetch(`https://fl-beach-field-guide-api.herokuapp.com/api/${beachName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('locationName').innerText = data.locationName
        document.getElementById('location').innerText = data.location
        document.getElementById('totalSize').innerText = data.totalSize
        document.getElementById('knownFor').innerText = data.knownFor

        document.getElementById('beachImage').innerText = data.image

    }catch(error) {
        console.log(error)
    }
}