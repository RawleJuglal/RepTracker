 const wgerKey= 'a784da1a80a2161663e9fcb2e3aa3401a0ec63d7'
  fetch('https://wger.de/api/v2/exercise/', {
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Token ${wgerKey}`,
    }
  })
    .then((res)=> res.json())
    .then(data => console.log(data))