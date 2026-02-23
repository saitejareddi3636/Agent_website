import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Create email transporter (using Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "saitejaredddy2@gmail.com",
        pass: process.env.EMAIL_PASS, // You'll need to set this as an app password
      },
    });

    // Format the demo request data
    const emailContent = `
🚀 NEW AI DEMO REQUEST

📋 DEMO DETAILS:
Solution Type: ${data.agentType}
Timeline: ${data.timeline || 'Not specified'}

🏢 BUSINESS INFORMATION:
Company: ${data.companyName}
Location: ${data.location || 'Not provided'}
Team Size: ${data.teamSize || 'Not specified'}
Current Challenges: ${data.currentChallenges || 'Not provided'}

👤 CONTACT INFORMATION:
Name: ${data.name}
Position: ${data.position || 'Not provided'}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

💬 ADDITIONAL NOTES:
${data.extra || 'No additional notes provided'}

---
⏰ Received at: ${new Date().toLocaleString()}
🎯 Follow up within 24 hours for best conversion!
    `;

    // Send email to you
    const notificationEmail = {
      from: `"Niro-AI Demo Request" <${process.env.EMAIL_USER || "saitejaredddy2@gmail.com"}>`,
      to: "saitejaredddy2@gmail.com",
      subject: `🚀 New Demo Request - ${data.agentType} (${data.companyName})`,
      text: emailContent,
    };

    const confirmationEmail = {
      from: process.env.EMAIL_USER || "saitejaredddy2@gmail.com",
      to: data.email,
      subject: `🚀 Welcome to Niro-AI - Demo Request Confirmation`,
      text: `Hi ${data.name},\n\nThank you for requesting a demo of Niro-AI! 🤖\n\nWe're excited to show you how ${data.agentType} can transform your business operations and save you time and money.\n\nSolution: ${data.agentType}\n\nOur team will review your request and reach out shortly to schedule a personalized walkthrough.\n\nBest regards,\nThe Niro-AI Team`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #4a90e2;">Welcome to Niro-AI! 🤖</h2>
        <p>Hi ${data.name},</p>
        <p>Thank you for requesting a demo of <strong>Niro-AI</strong>!</p>
        <p>We're excited to show you how <strong>${data.agentType}</strong> can transform your business operations and save you time and money.</p>
        
        <div style="background-color: #f0f7ff; padding: 15px; border-radius: 4px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Your Request Details:</h3>
          <ul style="list-style-type: none; padding-left: 0;">
            <li style="margin-bottom: 8px;">🏢 <strong>Company:</strong> ${data.companyName}</li>
            <li style="margin-bottom: 8px;">🤖 <strong>Niro-AI Solution:</strong> ${data.agentType}</li>
          </ul>
        </div>

        <p>Our team will review your request and reach out shortly to schedule a personalized walkthrough tailored to your needs.</p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
        
        <p style="color: #888; font-size: 14px;">Best regards,<br>The Niro-AI Team</p>
      </div>
    `
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(notificationEmail),
      transporter.sendMail(confirmationEmail)
    ]);

    return NextResponse.json({ 
      success: true, 
      message: "Demo request sent successfully!" 
    });

  } catch (error) {
    console.error("Error sending demo request:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to send demo request. Please try again or email us directly at saitejaredddy2@gmail.com" 
      },
      { status: 500 }
    );
  }
}
