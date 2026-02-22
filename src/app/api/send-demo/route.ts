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
Agent Type: ${data.agentType}
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
    await transporter.sendMail({
      from: `"AI Agents Demo Request" <${process.env.EMAIL_USER || "saitejaredddy2@gmail.com"}>`,
      to: "saitejaredddy2@gmail.com",
      subject: `🚀 New Demo Request - ${data.agentType} (${data.companyName})`,
      text: emailContent,
    });

    // Send confirmation email to the person who requested the demo
    const confirmationEmail = `
Hi ${data.name}!

Thank you for requesting a demo of our AI agents! 🤖

We're excited to show you how ${data.agentType} can transform your business operations and save you time and money.

📅 WHAT'S NEXT:
✅ Our team will review your request within 24 hours
✅ We'll reach out to schedule your personalized 15-minute demo
✅ You'll see exactly how AI can solve your specific challenges
✅ Get a custom ROI calculation for your business

📞 DEMO DETAILS:
• Industry: ${data.agentType}
• Company: ${data.companyName}
• Timeline: ${data.timeline || 'To be discussed'}

If you have any urgent questions, feel free to reply to this email or call us directly.

Looking forward to showing you the future of AI automation!

Best regards,
The AI Agents Team

---
🌐 Visit our website: [Your Website URL]
📧 Email: saitejaredddy2@gmail.com
    `;

    // Send confirmation to customer
    await transporter.sendMail({
      from: `"AI Agents Team" <${process.env.EMAIL_USER || "saitejaredddy2@gmail.com"}>`,
      to: data.email,
      subject: `✅ Demo Request Confirmed - We'll contact you within 24 hours!`,
      text: confirmationEmail,
    });

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
