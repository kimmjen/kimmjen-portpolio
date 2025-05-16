import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { to, from, name, subject, message } = await req.json();

    // Input validation
    if (!to || !from || !name || !subject || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // Email validation for the sender
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from)) {
      return NextResponse.json(
        { error: '유효한 이메일 주소를 입력해주세요.' },
        { status: 400 }
      );
    }

    // Create a test account with Ethereal Email if no SMTP settings in env
    // For production, use real SMTP settings in your environment variables
    const testAccount = await nodemailer.createTestAccount();

    // Create transporter object
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Boolean(process.env.SMTP_SECURE) || false,
      auth: {
        user: process.env.SMTP_USER || testAccount.user,
        pass: process.env.SMTP_PASS || testAccount.pass,
      },
    });

    // Format email content
    const mailOptions = {
      from: `"${name}" <${from}>`,
      to: to,
      subject: `[포트폴리오 메시지] ${subject}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">
            포트폴리오 웹사이트에서 새 메시지가 도착했습니다
          </h2>
          
          <p><strong>이름:</strong> ${name}</p>
          <p><strong>이메일:</strong> ${from}</p>
          <p><strong>제목:</strong> ${subject}</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin-top: 0;"><strong>메시지:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          
          <p style="color: #777; font-size: 12px; margin-top: 30px;">
            이 이메일은 포트폴리오 웹사이트의 연락 양식을 통해 자동으로 발송되었습니다.
          </p>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    // For development, log preview URL when using Ethereal Email
    if (process.env.NODE_ENV !== 'production') {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json({ 
      success: true,
      message: '이메일이 성공적으로 발송되었습니다.'
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: '이메일 전송 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 