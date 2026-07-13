const form = document.querySelector('#email-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || 'Website visitor').trim();
  const phone = String(data.get('phone') || 'Not provided').trim();
  const replyEmail = String(data.get('email') || 'Not provided').trim();
  const property = String(data.get('property') || 'Not provided').trim();
  const message = String(data.get('message') || 'I would like to request an inspection quote.').trim();
  const subject = encodeURIComponent(`Property inspection enquiry from ${name}`);
  const body = encodeURIComponent(`Hi Brett,\n\n${message}\n\nName: ${name}\nPhone: ${phone}\nReply email: ${replyEmail}\nProperty suburb/address: ${property}\n\nSent from the Six Star Property Inspections website.`);
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=brett.sixstar@gmail.com&su=${subject}&body=${body}`;
  const mailtoUrl = `mailto:brett.sixstar@gmail.com?subject=${subject}&body=${body}`;

  if (event.submitter?.value === 'gmail') {
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  window.location.href = mailtoUrl;
});

document.querySelector('#copyright').textContent = `© ${new Date().getFullYear()} Six Star Property Inspections`;
