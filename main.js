// select elements from dom
const emailListEl = document.querySelector('.email_list');
const btnEl = document.querySelector('.btn');


for(let i = 0; i < 9; i++){
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        //recover API content promis
        .then(response => response.json()) 
        
        //pars json obj promis
        .then(email => {
            const markup = `<li>${email.response}</li>`
            emailListEl.innerHTML += markup
        })
        .catch(error => console.error(error));
}
   