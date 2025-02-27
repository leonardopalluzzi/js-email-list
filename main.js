// select elements from dom
const emailListEl = document.querySelector('.email_list');
const btnEl = document.querySelector('.btn');

/**
 * generate a list of 10 random eamil and print them on page
 * @param {HTML} container 
 * @returns {void} return a series of string containing the murkup for the email list
 */
function getEmail (container){
    container.innerHTML = '';
    for(let i = 0; i < 10; i++){
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        //recover API content promis
        .then(response => response.json()) 
        
        //pars json obj promis
        .then(email => {
            const markup = `<li class="py-3">${email.response}</li>`
            container.innerHTML += markup;
            console.log(container.innerHTML);
        })
        .catch(error => console.error(error));
    }
}

getEmail(emailListEl);

btnEl.addEventListener('click', () => {
    getEmail(emailListEl);
})