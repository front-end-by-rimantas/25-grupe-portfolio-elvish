import { isValidEmail } from '../../utils/isValidEmail.js'

document.getElementById('getInTouchSending').addEventListener('click', sendGetInTouch);

document.getElementById('username').addEventListener('keydown', logKey1);
function logKey1(e) {
    // console.log(`Username ${e.code}`);
    if (e.code === 'Escape') {
        document.getElementById('username').value = '';
    }
}

document.getElementById('email').addEventListener('keydown', logKey2);
function logKey2(e) {
    // console.log(`Email ${e.code}`);
    if (e.code === 'Escape') {
        document.getElementById('email').value = '';
    }
}

document.getElementById('subject').addEventListener('keydown', logKey3);
function logKey3(e) {
    // console.log(`Subject ${e.code}`);
    if (e.code === 'Escape') {
        document.getElementById('subject').value = '';
    }
}

document.getElementById('message').addEventListener('keydown', logKey4);
function logKey4(e) {
    // console.log(`Message ${e.code}`);
    if (e.code === 'Escape') {
        document.getElementById('message').value = '';
    }
}

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

    // console.log(touchName, recipient, subject, message);

    localStorage.setItem(recipient, 'GIT Message ON');

    // console.log(`Jūs paspaudėte Send message knopką. Gavėjas: ${recipient}`);
    Email.send({
      Host: 'smtp.gmail.com',
      Username: 'bit25.Webpage@gmail.com',
      Password: 'bit25Meskiniukas',
      To: recipient,
      From: 'bit25.Webpage@gmail.com',
      Subject: 'Your message to the Elvish Webpage has been received successfully',
      Body: `Thank you for your message to the Elvish Webpage!<br><br><br>${touchName}<br><br>${recipient}<br><br>${subject}<br><br>${message}<br><br><br>We will be in touch in 1-2 working days.<br><br>© BIT-25 Team Elvish.`,
    })

    Email.send({
        Host: 'smtp.gmail.com',
        Username: 'bit25.Webpage@gmail.com',
        Password: 'bit25Meskiniukas',
        To: 'bit25.Webpage@gmail.com',
        From: 'bit25.Webpage@gmail.com',
        Subject: subject,
        Body: `${touchName}<br><br>${recipient}<br><br>${subject}<br><br>${message}.<br><br><br>© BIT-25 Team Elvish.`,
    })

    document.getElementById('username').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';

    alert('Message sent successfully');
}

export {sendGetInTouch}