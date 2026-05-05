const nodemailer = require('nodemailer')

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const { name, email, subject, message } = JSON.parse(event.body)

  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'All fields are required.' }),
    }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailToToheeb = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `[Portfolio] ${subject}`,
    html: `
      <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f7f4; border-radius: 8px;">
        <div style="background: #0f6e56; padding: 24px 32px; border-radius: 6px 6px 0 0;">
          <h1 style="color: white; font-size: 1.4rem; margin: 0;">New Portfolio Message</h1>
        </div>
        <div style="background: white; padding: 32px; border-radius: 0 0 6px 6px; border: 1px solid #e8e4de; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 0.8rem; color: #6b6b6b; text-transform: uppercase; letter-spacing: 0.1em; width: 100px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 0.95rem; color: #1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 0.8rem; color: #6b6b6b; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 0.95rem; color: #1a1a1a;"><a href="mailto:${email}" style="color: #0f6e56;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 0.8rem; color: #6b6b6b; text-transform: uppercase; letter-spacing: 0.1em;">Subject</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 0.95rem; color: #1a1a1a;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="font-size: 0.8rem; color: #6b6b6b; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;">Message</p>
            <p style="font-size: 0.95rem; color: #1a1a1a; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f0ede8;">
            <a href="mailto:${email}" style="background: #0f6e56; color: white; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-size: 0.85rem; font-weight: 600;">
              Reply to ${name}
            </a>
          </div>
        </div>
      </div>
    `,
  }

  const mailToSender = {
    from: `"Toheeb Ayobami" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name}!`,
    html: `
      <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f7f4; border-radius: 8px;">
        <div style="background: #0f6e56; padding: 24px 32px; border-radius: 6px 6px 0 0;">
          <h1 style="color: white; font-size: 1.4rem; margin: 0;">Thanks for getting in touch!</h1>
        </div>
        <div style="background: white; padding: 32px; border-radius: 0 0 6px 6px; border: 1px solid #e8e4de; border-top: none;">
          <p style="font-size: 0.95rem; color: #1a1a1a; line-height: 1.8;">Hi ${name},</p>
          <p style="font-size: 0.95rem; color: #6b6b6b; line-height: 1.8;">
            Thank you for reaching out through my portfolio. I've received your message
            and will get back to you within <strong style="color: #1a1a1a;">24 hours</strong>.
          </p>
          <p style="font-size: 0.95rem; color: #6b6b6b; line-height: 1.8;">
            In the meantime, feel free to connect with me on LinkedIn.
          </p>
          <div style="margin-top: 28px;">
            <a href="https://www.linkedin.com/in/adepoju-toheeb-ayobami-52422b188/"
               style="background: #0f6e56; color: white; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-size: 0.85rem; font-weight: 600;">
              Connect on LinkedIn
            </a>
          </div>
          <p style="font-size: 0.9rem; color: #6b6b6b; margin-top: 32px; line-height: 1.8;">
            Best regards,<br/>
            <strong style="color: #1a1a1a;">Adepoju Toheeb Ayobami</strong><br/>
            <span style="color: #0f6e56;">QA Engineer & Senior SDET</span>
          </p>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailToToheeb)
    await transporter.sendMail(mailToSender)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    }
  } catch (error) {
    console.error('Email error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email.' }),
    }
  }
}