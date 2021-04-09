const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    try {
        sgMail.send({
            to: email,
            from: 'rares.ghilvacs@softvision.com',
            subject: 'Thanks for joining',
            text: `Welcome to the app ${name}. Let me know how the app feels.`
        });
    } catch (e) {
        console.log('Error message: ', e);
    }
}

const sendFarewellEmail = (email, name) => {
    try {
        sgMail.send({
            to: email,
            from: 'rares.ghilvacs@softvision.com',
            subject: 'Farewell good friend',
            text: `${name} have a great journey onward. Let me know if there is something else I can do for you.`
        });
    } catch (e) {
        console.log('Error message: ', e);
    }
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}