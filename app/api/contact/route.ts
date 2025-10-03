import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // 👈 usar siempre este si no tienes dominio
      to: ["alexsilverr2390@gmail.com"], // aquí recibes los mensajes
      subject: `Contacto: ${subject}`,
      replyTo: email,
 html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.5; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
    <!-- Header -->
    <div style="background-color: #0d6efd; color: #fff; padding: 20px; text-align: center;">
      <h2 style="margin: 0;">📬 Nuevo mensaje de contacto</h2>
    </div>

    <!-- Body -->
    <div style="padding: 20px;">
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0d6efd;">${email}</a></p>
      <p><strong>Asunto:</strong> ${subject}</p>
      <p><strong>Mensaje:</strong></p>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px; white-space: pre-line;">
        ${message}
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f1f1f1; color: #555; text-align: center; padding: 15px; font-size: 12px;">
      <p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
    </div>
  </div>
`
,
    });

    return new Response(JSON.stringify({ success: true, data: response }), { status: 200 });
  } catch (error) {
    let errorMsg = "Error desconocido";
    if (error instanceof Error) errorMsg = error.message;
    return new Response(JSON.stringify({ success: false, error: errorMsg }), { status: 500 });
  }
}
