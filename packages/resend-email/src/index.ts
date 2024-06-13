import {Resend} from 'resend';
import { getEmailTemplateByName } from '@repo/prisma-db/repo/email-template';

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email: string, token:string) => {
    const confirmLink = `http://localhost:4000/auth/new-verification?token=${token}`
    const emailTemplate = await getEmailTemplateByName('verification-mail');
    if (!emailTemplate) {
        return {error: "Verification Mail Template Not Found!"}
    }
    let html = emailTemplate.html;
    html = html.replace('{{confirmation_link}}', confirmLink);
    let from = emailTemplate.from;
    let subject = emailTemplate.subject;
    await resend.emails.send({
        from: from,
        to: email,
        subject: subject,
        html: html
    })
}

export const sendResetEmail = async (email: string, token:string) => {
    const confirmLink = `http://localhost:4000/auth/reset-password?token=${token}`
    const emailTemplate = await getEmailTemplateByName('reset-password');
    if (!emailTemplate) {
        return {error: "Email template not found!"}
    }
    let html = emailTemplate.html;
    html = html.replace('{{reset_password_link}}', confirmLink);
    let from = emailTemplate.from;
    let subject = emailTemplate.subject;
    await resend.emails.send({
        from: from,
        to: email,
        subject: subject,
        html: html
    })
}
