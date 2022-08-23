// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//       }),
// };
// fetch("http://localhost:3000/dogs", configurationObject)
// .then(response => {return response.json()})
// .then(object => console.log(object))
// .catch(error => {
//   alert("Bad things! Ragnarők!")
//   console.log(error.message)});

// const submitData = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     name: "hafsa",
//     email: "hafsanuh@gmail.com",
//   }),
// }  
// fetch('http://localhost:3000/users', submitData)
// .then(response => {return response.json()})
// .then(object => console.log(object))



function submitData(name, email){
  return fetch("http://localhost:3000/users", submitData= {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    })
  })
  .then(response => {return response.json()})
  .then(object => {document.body.innerHTML = object[ "id" ];})
  .catch(error => {document.body.innerHTML = error.message;});
}
submitData() 

//got a block have 3 passes and 1 fail