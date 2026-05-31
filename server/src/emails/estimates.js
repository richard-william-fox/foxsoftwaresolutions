import nodemailer from 'nodemailer'

const sendEstimateEmail = (estimateInfo) => {

    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "root@tabletopsupercrew.net",
            pass: process.env.GOOGLE_APP_PASSWORD,
        }
    })

    const mailOptions = {
        from: 'root@tabletopsupercrew.net',
        to: 'richard.fox@foxsoftwaresolutions.org',
    }

    mailOptions.subject = 'Estimate request'
    mailOptions.text = 'New estimate request.\n' +
        estimateInfo.name + '\n' +
        estimateInfo.email + '\n' +
        estimateInfo.description

    smtpTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}

export default sendEstimateEmail
