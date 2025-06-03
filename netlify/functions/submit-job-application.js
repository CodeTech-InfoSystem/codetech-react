const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
    try {
        const formData = JSON.parse(event.body);
        const {
            firstName,
            lastName,
            email,
            phone,
            location,
            jobTitle,
            jobRole,
            workingMode,
            experienceType,
            totalExp,
            currentCompany,
            noticePeriod,
            currentCtc,
            expectedCtc,
            relocated,
            resumeURL
        } = formData;

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !jobTitle) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields' }),
            };
        }

        // HR notification email
        const hrEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #242423; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; color: #af9854;">New Job Application Received</h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #242423; border-bottom: 2px solid #af9854; padding-bottom: 10px;">Application Details</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #af9854;">Position:</strong> ${jobTitle}</p>
          </div>

          <h3 style="color: #242423; border-bottom: 1px solid #af9854; padding-bottom: 5px;">Candidate Information</h3>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #af9854;">Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 10px 0;"><strong style="color: #af9854;">Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #af9854;">Phone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong style="color: #af9854;">Current Location:</strong> ${location || 'N/A'}</p>
            <p style="margin: 10px 0;"><strong style="color: #af9854;">jobRole:</strong> ${jobRole || 'N/A'}</p>
            <p style="margin: 10px 0;"><strong style="color: #af9854;">Experience Type:</strong> ${experienceType}</p>
          </div>

          ${experienceType === 'experienced' ? `
            <h3 style="color: #242423; border-bottom: 1px solid #af9854; padding-bottom: 5px;">Experience Details</h3>
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #af9854;">Total Experience:</strong> ${totalExp || 'N/A'}</p>
              <p style="margin: 10px 0;"><strong style="color: #af9854;">Current Company:</strong> ${currentCompany || 'N/A'}</p>
              <p style="margin: 10px 0;"><strong style="color: #af9854;">Notice Period:</strong> ${noticePeriod || 'N/A'}</p>
              <p style="margin: 10px 0;"><strong style="color: #af9854;">Current CTC:</strong> ${currentCtc || 'N/A'} LPA</p>
              <p style="margin: 10px 0;"><strong style="color: #af9854;">Expected CTC:</strong> ${expectedCtc || 'N/A'} LPA</p>
            </div>
          ` : ''}

          <h3 style="color: #242423; border-bottom: 1px solid #af9854; padding-bottom: 5px;">Candidate Information</h3>

          ${(workingMode === 'Hybrid' || workingMode === 'Onsite') ? `
            <p style="margin: 10px 0;"><strong style="color: #af9854;">Ready to Relocate:</strong> ${relocated}</p>
          ` : ''}

          ${`<div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #af9854;">Resume:</strong> <a href="${resumeURL}" target="_blank" style="color: #af9854;">View Resume</a></p>
            </div>`}
        </div>
      </div>
    `;

        // Candidate thank you email
        const candidateEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #242423; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; color: #af9854;">Thank You for Your Application!</h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #242423;">Dear ${firstName} ${lastName},</h2>
          
          <p style="line-height: 1.6; color: #666;">Thank you for your interest in the <strong style="color: #af9854;">${jobTitle}</strong> position with our company. We have successfully received your application and appreciate the time you took to apply.</p>
          
          <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #242423; margin-top: 0;">Application Summary:</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin: 10px 0; padding: 5px 0; border-bottom: 1px solid #eee;"><strong style="color: #af9854;">Position:</strong> ${jobTitle}</li>
              <li style="margin: 10px 0; padding: 5px 0; border-bottom: 1px solid #eee;"><strong style="color: #af9854;">Experience Type:</strong> ${experienceType || 'N/A'}</li>
              <li style="margin: 10px 0; padding: 5px 0;"><strong style="color: #af9854;">Application Date:</strong> ${new Date().toLocaleDateString()}</li>
            </ul>
          </div>
          
          <p style="line-height: 1.6; color: #666;">Our HR team will review your application carefully. If your qualifications match our requirements, we will contact you within the next 5-7 business days to discuss the next steps in our selection process.</p>
          
          <p style="line-height: 1.6; color: #666;">If you have any questions about your application or the hiring process, please don't hesitate to reach out to us.</p>
          
          <p style="line-height: 1.6; color: #666;">Best regards,<br><strong style="color: #af9854;">The HR Team</strong></p>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
          <p style="margin: 0;">This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    `;

        // Send email to HR
        const hrEmail = await resend.emails.send({
            from: 'noreply@codetechinfosystem.com', // Replace with your verified domain
            to: ['job-apply@codetechinfosystem.com'], // Replace with actual HR email
            reply_to: email,
            subject: `New Job Application: ${jobTitle} - ${firstName} ${lastName}`,
            html: hrEmailHtml,
        });

        // Send thank you email to candidate
        const candidateEmail = await resend.emails.send({
            from: 'noreply@codetechinfosystem.com', // Replace with your verified domain
            to: [email],
            subject: `Thank you for your application - ${jobTitle}`,
            html: candidateEmailHtml,
        });

        console.log('HR Email sent:', hrEmail);
        console.log('Candidate Email sent:', candidateEmail);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Application submitted successfully',
                hrEmailId: hrEmail.id,
                candidateEmailId: candidateEmail.id,
            }),
        };

    } catch (error) {
        console.error('Error processing application:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Failed to process application',
                details: error.message,
            }),
        };
    }
};