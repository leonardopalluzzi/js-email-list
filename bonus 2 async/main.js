// select elements from dom
const emailListEl = document.querySelector('.email_list');
const btnEl = document.querySelector('.btn');

async function fetchEmail() {
    const response = await fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    const data = await response.json();
    const email = data.response
    return email;
}


/**
 * 
 * @param {string} email 
 * @returns {Array} return an array of 10 random generated emails
 */
async function getEmailArray() {
    const emailArr = [];
    for (let i = 0; i < 10; i++) {
        const email = await fetchEmail();
        emailArr[i] = email;

    }
    //console.log(emailArr);

    return emailArr;
}

async function getListMarkup(container) {
    const emailArray = await getEmailArray();
    let markup = '';
    for (let i = 0; i < emailArray.length; i++) {
        markup += `<li class="py-3">${emailArray[i]}</li>`;
    }
    container.innerHTML = markup
    //console.log(markup);

    return markup
}

getListMarkup(emailListEl);

btnEl.addEventListener('click', () => {
    getListMarkup(emailListEl);
})