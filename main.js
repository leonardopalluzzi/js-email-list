// select elements from dom
const emailListEl = document.querySelector('.email_list');
const btnEl = document.querySelector('.btn');

fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    //recover API content promis
    .then(response => response.json()) 
    
    //pars json obj promis
    .then(data => {
        console.log(data.response);
    })
    .catch(error => console.error(error))