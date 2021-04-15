import { isValidEmail } from '../../utils/isValidEmail.js'

document.getElementById('email_sending').addEventListener('click', sendEmail);

document.getElementById('sub-email').addEventListener('keypress', logKey);

function logKey(e) {
    // console.log(`${e.code}`);
    if (e.code === 'Enter') {
      sendEmail();
  }
}

function sendEmail() {
    const recipient = document.getElementById('sub-email').value;
    document.getElementById('sub-email').value = '';
    // console.log('Gavėjas: ', recipient);
        if (recipient === '') {
            return;
        }
        if (!isValidEmail(recipient)) {
            return;
        }
    
    localStorage.setItem(recipient, 'Subscribe ON');

    // console.log(`Jūs paspaudėte Subscribe knopką arba Enter. Gavėjas: ${recipient}`);
    Email.send({
      Host: 'smtp.gmail.com',
      Username: 'bit25.Webpage@gmail.com',
      Password: 'bit25Meskiniukas',
      To: recipient,
      From: 'bit25.Webpage@gmail.com',
      Subject: 'Subscription for the Elvish Webpage has been added successfully',
      Body: `Subscription for the Elvish Webpage has been added for ${recipient}.<br><br>Thank you!<br><br><br>© BIT-25 Team Elvish.`,
    })
    alert('mail sent successfully');
}

export {sendEmail}