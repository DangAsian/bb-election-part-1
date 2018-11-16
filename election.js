document.addEventListener("DOMContentLoaded", function() {
var select = document.querySelector('#select');
// var button = document.querySelector('button');

  axios({
   url: 'https://bb-election-api.herokuapp.com/',
   method: 'get',
   responseType: 'text'
}).then(function(response){
  console.log(response.data.candidates);
  response.data.candidates.forEach(function(candidate){
    var addPeople = document.createElement('li');
    var formCreate = document.createElement('form');
    var submit = document.createElement('input');
    var hidden = document.createElement('input');
    submit.setAttribute('type', 'submit');
    formCreate.setAttribute('action', "https://bb-election-api.herokuapp.com/vote");
    formCreate.setAttribute('method', "post");
    hidden.setAttribute('type', 'hidden');
    hidden.setAttribute('name', "id");
    hidden.setAttribute('value', candidate.id);
    submit.innerHTML = "vote";
    addPeople.innerHTML = `${candidate.name} ${candidate.votes}`
    formCreate.innerHTML = "I'm a form"
    select.appendChild(addPeople);
    addPeople.appendChild(formCreate);
    formCreate.appendChild(hidden);
    formCreate.appendChild(submit);

    // formCreate.addEventListener("submit", function(e){
    //   e.preventDefault();
    //   axios({
    //    url: 'https://bb-election-api.herokuapp.com/vote',
    //    method: 'post',
    //    data: {name:}
    // }).then(function(response){
    //     console.log(response.data);
    //
    // })
    // })
  })
})

// button.addEventListener("click", function(){
//   console.log("ih");
// });


});
