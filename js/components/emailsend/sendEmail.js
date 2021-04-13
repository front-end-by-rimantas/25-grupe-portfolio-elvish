document.getElementById('email_sending').addEventListener('click', sendEmail);

let message_receiver = 'tomas.va@yahoo.com';

function sendEmail(recipient) {
    recipient = message_receiver;
    console.log(`Jūs paspaudėte knopką. Gavėjas: ${recipient}`);
    Email.send({
      Host: 'smtp.gmail.com',
      Username: 'bit25.Webpage@gmail.com',
      Password: 'bit25Meskiniukas',
      To: recipient,
      From: 'bit25.Webpage@gmail.com',
      Subject: 'Subscription for the Elvish Webpage has been added successfully 2021-04-12--488',
      Body: `Subscription for the Elvish Webpage has been added for ${recipient}.<br><br>Thank you!<br><br><br>© BIT-25 Team Elvish.`,
    })
      .then(function (message) {
        alert('mail sent successfully')
      });
  }

export {sendEmail}