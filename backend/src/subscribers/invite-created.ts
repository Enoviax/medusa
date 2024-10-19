import { INotificationModuleService, IUserModuleService } from '@medusajs/types';
import { ModuleRegistrationName, Modules } from '@medusajs/utils';
import { SubscriberArgs, SubscriberConfig } from '@medusajs/medusa';
import { backendUrl } from '../../medusa-config';

export default async function userInviteHandler({
  event: { data },
  container,
}: SubscriberArgs<any>) {
  // console.log('User invite created', data);

  const notificationModuleService: INotificationModuleService = container.resolve(Modules.NOTIFICATION);
  const userModuleService: IUserModuleService = container.resolve(Modules.USER);

  const invite = await userModuleService.retrieveInvite(data.id);

  // SendGrid code 
  // const { email, token } = invite;
  // await notificationModuleService.createNotifications({
  //   to: email,
  //   channel: 'email',
  //   template: process.env.SENDGRID_TEMPLATE_ID_USER_IVITE_CREATED, 
  //   data: { invite_link: `${backendUrl}/app/invite?token=${token}` }
  // });

  // Resend code
  try {
    await notificationModuleService.createNotifications({
      to: invite.email,
      channel: 'email',
      template: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You've Been Invited to Keensight!</title>
</head>
<body style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
    <div style="background-color: #000000; padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 36px; margin: 0; letter-spacing: 2px; font-weight: bold;">KEENSIGHT</h1>
    </div>
    <div style="padding: 40px; background-color: #ffffff; border-bottom: 3px solid #000000;">
        <h2 style="color: #000000; margin-bottom: 20px; font-size: 24px;">You've Been Invited!</h2>
        <p style="margin-bottom: 15px;">Hello,</p>
        <p style="margin-bottom: 15px;">We're excited to invite you to join Keensight, where insight meets innovation.</p>
        <p style="margin-bottom: 25px;">Click the button below to accept your invitation and start your journey with us:</p>
        <div style="text-align: center; margin: 30px 0;">
            <a href="${backendUrl}/app/invite?token=${invite.token}" style="background-color: #000000; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 16px; display: inline-block; transition: background-color 0.3s ease;">Accept Invitation</a>
        </div>
        <p style="margin-bottom: 15px;">If you have any questions, our support team is here to help you every step of the way.</p>
        <p style="margin-bottom: 20px;">Welcome aboard,<br>The Keensight Team</p>
    </div>
    <div style="background-color: #000000; color: #ffffff; text-align: center; padding: 20px; font-size: 14px;">
        <p style="margin: 0;">&copy; 2024 Keensight. All rights reserved.</p>
    </div>
</body>
  </html>`,
      data: {
        subject: 'You\'ve Been Invited to Keensight!'
      }
    });
    console.log('Keensight invitation email sent successfully.');
  } catch (error) {
    console.error('Error sending Keensight invitation email:', error);
  }
}

export const config: SubscriberConfig = {
  event: 'invite.created'
};
