export const userPassUpdateTemplate =(tempPassword)=>{
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Temporary Password Assigned</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f7;
      padding: 20px;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
    }
    .temp-pass {
      font-size: 18px;
      font-weight: bold;
      color: #007bff;
      word-break: break-all;
    }
    .cta-button {
      display: inline-block;
      padding: 10px 20px;
      margin-top: 20px;
      color: #fff;
      background-color: #28a745;
      text-decoration: none;
      border-radius: 5px;
    }
    .footer {
      font-size: 12px;
      margin-top: 30px;
      color: #777;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Welcome to Our Platform</h2>
    </div>

    <p>Hi {{userName}},</p>

    <p>You’ve been assigned a <strong>temporary password</strong> for your account:</p>

    <p class="temp-pass">${tempPassword}</p>

    <p><strong>Important:</strong> This temporary password will be <span style="color: red;">deleted after you log in</span> if you do not set a new one. For your security, we recommend changing your password immediately after logging in.</p>

    <p>To create a new password, click the button below:</p>

    <a href="{{resetPasswordLink}}" class="cta-button">Create New Password</a>

    <p>If you did not request this or believe it's an error, please contact our support team.</p>

    <div class="footer">
      &copy; {2025}} Saylani micriFinance App. All rights reserved.
    </div>
  </div>
</body>
</html>
`
}