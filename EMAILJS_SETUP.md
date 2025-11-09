# EmailJS Setup Guide for Eversham Chauffeurs

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. After logging in, go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. For Gmail:
   - Service ID: Use `service_eversham` (or your custom name)
   - Connect your Gmail account: kpriyesh1908@gmail.com
   - Click "Create Service"

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Template ID: Use `template_eversham` (or your custom name)
4. Set up the template with these variables:

**Subject Line:**
```
New Contact Form Submission from {{from_name}}
```

**Email Body:**
```
You have received a new message from the Eversham Chauffeurs contact form.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply directly to: {{reply_to}}
```

5. Set "To Email" to: kpriyesh1908@gmail.com
6. Click "Save"

## Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Copy your "Public Key" (it looks like: "YOUR_PUBLIC_KEY_HERE")

## Step 5: Update the Code
Open `src/pages/Contact.jsx` and replace these values on lines 21-23:

```javascript
const serviceId = 'service_eversham'  // Replace with your Service ID from Step 2
const templateId = 'template_eversham'  // Replace with your Template ID from Step 3
const publicKey = 'YOUR_PUBLIC_KEY'  // Replace with your Public Key from Step 4
```

## Step 6: Test the Form
1. Make sure your dev server is running: `npm run dev`
2. Go to the Contact page
3. Fill out the form and submit
4. Check kpriyesh1908@gmail.com for the email

## Troubleshooting
- If emails aren't sending, check the browser console for errors
- Make sure your Gmail account allows "Less secure app access" or use an App Password
- Verify all IDs match exactly (case-sensitive)
- Check EmailJS dashboard for delivery status

## Free Tier Limits
- 200 emails per month (free)
- Upgrade if you need more

## Security Note
The public key is safe to use in frontend code - it only allows sending emails through your configured templates.
