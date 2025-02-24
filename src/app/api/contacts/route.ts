import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; 

export async function POST(req) {
  const contactsData = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PW,
    },
  });

  try {
    await transporter.sendMail({
      from: `<Francesco Merighi> ${process.env.EMAIL_USER}`,
      to: process.env.EMAIL_USER,
      subject: 'Nuova richiesta di contatto',
      html: `
        <h1>Nuova richiesta di contatto</h1>
        <p><strong>Nome e cognome:</strong> ${contactsData.fullName}</p>
        <p><strong>Azienda:</strong> ${contactsData.company}</p>
        <p><strong>Email:</strong> ${contactsData.email}</p>
        <p><strong>Telefono:</strong> ${contactsData.phone}</p>
      `,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Errore nell'invio del form" }, { status: 500 });
  }

  return NextResponse.json({ message: "Form inviato correttamente" }, { status: 200 });
}