export interface ContactFormValues {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export const initialContactForm: ContactFormValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

export function validateContact(values: ContactFormValues) {
    const errors: Partial<Record<keyof ContactFormValues, string>> = {};
    if (!values.name?.trim()) errors.name = 'Vui lòng nhập tên';
    if (!values.email?.trim()) errors.email = 'Vui lòng nhập email';
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Email không hợp lệ';
    if (!values.message?.trim()) errors.message = 'Vui lòng nhập nội dung';
    return errors;
}
