// select elements from dom
const emailListEl = document.querySelector('.email_list');
const btnEl = document.querySelector('.btn');


// for(let i = 0; i < 9; i++){
//     fetch('https://flynn.boolean.careers/exercises/api/random/mail')
//         //recover API content promis
//         .then(response => response.json()) 
        
//         //pars json obj promis
//         .then(email => {
//             const markup = `<li>${email.response}</li>`
//             emailListEl.innerHTML += markup
//         })
//         .catch(error => console.error(error));
//     console.log(emailListEl);
// }


function getEmail (list){
    list.innerHTML = '';
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        //recover API content promis
        .then(response => response.json()) 
        
        //pars json obj promis
        .then(email => {
            const markup = `<li>${email.response}</li>`
            list.innerHTML += markup
        })
        .catch(error => console.error(error));
    return list
}

console.log(getEmail(emailListEl));

for(let i = 0; i < 9; i++){
    getEmail(emailListEl);
}

btnEl.addEventListener('click', () => {
    for(let i = 0; i < 9; i++){
        getEmail(emailListEl);
    }
})