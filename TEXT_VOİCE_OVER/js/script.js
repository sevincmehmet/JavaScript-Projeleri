const textArea = document.querySelector('#text')
let voiceList = document.querySelector('voice')
let btn = document.querySelector('.submit')

btn.addEventListener("click", speak)

function speak () {
    responsiveVoice.speak(textArea.value, "US English Male")
}