const textArea = document.querySelector('#text')
let voiceList = document.querySelector('voice')
let btn = document.querySelector('.submit')

btn.addEventListener("click", speak)

var message = $('#myText').val();


function speak () {
    responsiveVoice.speak(textArea.value, "US English Male")
}