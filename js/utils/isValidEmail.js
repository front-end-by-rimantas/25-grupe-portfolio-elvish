function isValidEmail(inputText) {
    const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(inputText.match(mailformat)) {
            return true;
            } else {
            alert('You have entered an invalid email address!');
            return false;
            }   
}

export {isValidEmail}