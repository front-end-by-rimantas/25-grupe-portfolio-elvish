import { isValidEmail } from '../../utils/isValidEmail.js'

document.getElementById('getInTouchSending').addEventListener('click', sendGetInTouch);

// document.getElementById('sub-email').addEventListener('keypress', logKey);

// function logKey(e) {
//     // console.log(`${e.code}`);
//     if (e.code === 'Enter') {
//       sendEmail();
//   }
// }

function sendGetInTouch() {
    const recipient = document.getElementById('email').value;
    document.getElementById('email').value = '';
    // console.log('Gavėjas: ', recipient);
        if (recipient === '') {
            return;
        }
        if (!isValidEmail(recipient)) {
            return;
        }

    const touchName = document.getElementById('username').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

console.log(touchName, recipient, subject, message);


    localStorage.setItem(recipient, 'GIT Message ON');

    // console.log(`Jūs paspaudėte Subscribe knopką arba Enter. Gavėjas: ${recipient}`);
    Email.send({
      Host: 'smtp.gmail.com',
      Username: 'bit25.Webpage@gmail.com',
      Password: 'bit25Meskiniukas',
      To: recipient,
      From: 'bit25.Webpage@gmail.com',
      Subject: 'Your message to the Elvish Webpage has been received successfully',
      Body: `Thank you for your message to the Elvish Webpage!<br><br><br>${touchName}<br><br>${recipient}<br><br>${subject}<br><br>${message}<br><br><br>We will be in touch in 1-2 working days.<br><br>© BIT-25 Team Elvish.`,
    })
    alert('Message sent successfully');
}

export {sendGetInTouch}