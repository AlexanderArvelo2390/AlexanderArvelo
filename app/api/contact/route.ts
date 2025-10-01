import { Resend } from 'resend';

import type { NextRequest } from 'next/server';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();

  try {
    const { name, email, subject, message } = body;
    const response = await resend.emails.send({
  from: "alexander.arvelo2390@gmail.com ", // Puedes usar replies@resend.dev para pruebas
  to: 'alexander.arvelo2390@gmail.com', // Cambia por tu correo real si lo deseas
      subject: `Contacto: ${subject}`,
  replyTo: email,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    let errorMsg = 'Error desconocido';
    if (error instanceof Error) errorMsg = error.message;
    return new Response(JSON.stringify({ success: false, error: errorMsg }), { status: 500 });
  }
}
