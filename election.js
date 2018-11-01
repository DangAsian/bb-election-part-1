document.addEventListener("DOMContentLoaded", function() {
var select = document.querySelector('#select');

  axios({
   url: 'https://bb-election-api.herokuapp.com/',
   method: 'get',
   responseType: 'text'
}).then(function(response){
  console.log(response.data.candidates);
  response.data.candidates.forEach(function(candidate){
    var addPeople = document.createElement('li');
    addPeople.innerHTML = `${candidate.name} ${candidate.votes}`
    select.appendChild(addPeople);

  })
})


});
