
function getdata(){
    const userName = document.getElementById('input').value
    fetch(`https://api.github.com/users/${userName}`)
    .then((gitData) => gitData.json())
    .then((Data) => {
        console.log(Data)
        document.getElementById('img').src = Data.avatar_url
        document.getElementById('bioData').innerHTML = `Name ${Data.name}`
        document.getElementById('bio').innerHTML = `${Data.bio}`
       
        document.getElementById('flowers').innerHTML = `Followers: ${Data.followers}` 
       
        
        document.getElementById('flowing').innerHTML = `Following: ${Data.following}`
        document.getElementById('url').href =  `${Data.html_url}`
         
        document.querySelector('.url').style.display = 'block'
    })
    
}

