var senderName = document.getElementById("name")
var senderEmail = document.getElementById("email");
var inputMessage = document.getElementById("message");

// document.getElementById('name').addEventListener("keyup", function(){
 
// })

document.getElementById('send-message').addEventListener('click', function(){
    let whatsappUriText = 'Hi Sameer'
    if(senderName && senderName.value && senderName.value !== '') whatsappUriText += ` ${senderName.value} this side`
    if(senderEmail && senderEmail.value && senderEmail.value !== '') whatsappUriText += ` and my email id is ${senderEmail.value}`
    if(inputMessage && inputMessage.value && inputMessage.value !== '') whatsappUriText += ` ${inputMessage.value}`
     window.open(`https://api.whatsapp.com/send/?phone=9372272095&text=${encodeURI(whatsappUriText)}&type=phone_number&app_absent=0`, '_blank')
})