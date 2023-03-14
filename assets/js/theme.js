document.querySelectorAll('.datepicker').forEach(function(field) {
	var picker = new Pikaday({
		field: field
	});
});
/*
const $form = document.getElementById('#my-form');

$form.addEventListener('submit', handleSubmit);



async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("my-form-status");
    const data = new FormData(this);
    const response = await fetch(this.action, {
      method: this.method,
      body: data,
      headers: {
          'Accept': 'application/json'
        }
      })
      const json = await response.json();
      status.innerHTML = json.message;
      if (json.status === 'success') {
        this.reset();
      }else{
        status.innerHTML = json.message;
      }  
    
    

}
*/
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
  



