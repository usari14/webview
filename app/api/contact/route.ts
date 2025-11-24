// This API route is now deprecated. Please use the static contact form with mailto link on the frontend.

// Example implementation for static site:
// On your contact form page/component, after validating input, generate a mailto link like:
//
// const mailto = `mailto:info@dwink.pk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
//   `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nCompany: ${company || 'Not provided'}\n\nMessage:\n${message}`
// )}`;
// window.location.href = mailto;

// Remove all server-side logic from this API route.