const scriptURL = 'https://script.google.com/macros/s/AKfycbwtdt0_dSY0a1K5_WNKn1QsEAlKlNIaFeoqXZ1JYeL0UuED7hZWbn5rnHD1-NTg3UH9/exec'
const form = document.forms['submit-to-google-sheet']
const comment = document.getElementById("comment")

//URL addres can be accesed at this link :https://docs.google.com/spreadsheets/d/1dWBsWSccezvZRcXdI_VAlTbLsqY-JN3cW2IY5EsUoFA/edit?usp=sharing


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            comment.innerHTML="Comment has been submitted"
            setTimeout(function(){
                comment.innerHTML=""
            },2000)
            form.reset()
        } )
        .catch(error => console.error('Error!', error.comment))
}) 