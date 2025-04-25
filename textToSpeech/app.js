function speak() {
    const textInput = document.getElementById('text-input').value;
    const speechSynthesisUtterance = new SpeechSynthesisUtterance(textInput);
    // const speechSynthesisUtterance = new SpeechSynthesisUtterance("Hello, Dnyanesh Welcome to the world of knowledge");

    // Set the language to Marathi
    speechSynthesisUtterance.lang = 'mr-IN';

    // Speak the text
    window.speechSynthesis.speak(speechSynthesisUtterance);
}
