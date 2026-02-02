import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EMAIL } from '@/constants/data';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      name, 
      email, 
      mobile, 
      whatsappForm, 
      country, 
      exactLocation, 
      rentalTerm, 
      message, 
      type,
      subject,
      monthlyIncome,
      bedrooms,
      bathrooms,
      additionalInfo
    } = body;

    let htmlContent = `
      <h2>New Inquiry from ${name}</h2>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>WhatsApp:</strong> ${whatsappForm}</p>
      <p><strong>Location:</strong> ${country} - ${exactLocation}</p>
    `;

    if (rentalTerm) {
      htmlContent += `<p><strong>Rental Term:</strong> ${rentalTerm}</p>`;
    }

    if (type === 'sell') {
      htmlContent += `
        <h3>Property Details</h3>
        <p><strong>Monthly Rental Valuation:</strong> ${monthlyIncome}</p>
        <p><strong>Bedrooms:</strong> ${bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${bathrooms}</p>
        <p><strong>Additional Features:</strong> ${additionalInfo}</p>
      `;
    }

    if (message) {
      htmlContent += `<h3>Message / Notes</h3><p>${message}</p>`;
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // The user will need to configure their domain later
      to: [EMAIL],
      subject: subject || 'New Property Inquiry',
      replyTo: email,
      html: htmlContent,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
