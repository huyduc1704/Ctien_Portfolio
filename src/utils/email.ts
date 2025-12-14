import type { ContactFormValues } from '../types/form';

export function sendContactEmail(values: ContactFormValues) {
    const to = 'ctien2901@gmail.com';
    const subject = encodeURIComponent(values.subject || `Liên hệ từ ${values.name}`);
    const body = encodeURIComponent(`Tên: ${values.name}\nEmail: ${values.email}\n\n${values.message}`);
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
}