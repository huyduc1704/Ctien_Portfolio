import React from 'react';
import type { ContactFormValues, SubmitStatus } from '../types/form';
import { initialContactForm, validateContact } from '../types/form';
import { sendContactEmail } from '../utils/email';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 10,
  border: '1px solid #e8e8e0',
  fontSize: 14,
  transition: 'all 0.2s',
};

const labelStyle: React.CSSProperties = { fontSize: 14, color: '#333' };
const errorStyle: React.CSSProperties = { color: '#c1121f', fontSize: 12 };

const Contact: React.FC = () => {
  const [values, setValues] = React.useState<ContactFormValues>(initialContactForm);
  const [status, setStatus] = React.useState<SubmitStatus>('idle');
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const onChange =
    (field: keyof ContactFormValues) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues((v) => ({ ...v, [field]: e.target.value }));
      };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validateContact(values);
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus('submitting');
    try {
      sendContactEmail(values);
      setStatus('success');
      setValues(initialContactForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}>
      <h2
        style={{
          margin: 0,
          fontSize: 'clamp(28px, 4vw, 40px)',
          marginBottom: 24,
          color: '#dc6139',
          fontWeight: 700,
          fontFamily: 'Georgia, serif',
        }}
      >
        Liên hệ
      </h2>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
        <div>
          <label style={labelStyle}>Tên</label>
          <input
            style={inputStyle}
            placeholder="Tên của bạn"
            value={values.name}
            onChange={onChange('name')}
            onFocus={(e) => {
              e.target.style.borderColor = '#dc6139';
              e.target.style.boxShadow = '0 0 0 3px rgba(220, 97, 57, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e8e8e0';
              e.target.style.boxShadow = 'none';
            }}
          />
          {errors.name && <div style={errorStyle}>{errors.name}</div>}
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            style={inputStyle}
            placeholder="you@example.com"
            value={values.email}
            onChange={onChange('email')}
            onFocus={(e) => {
              e.target.style.borderColor = '#dc6139';
              e.target.style.boxShadow = '0 0 0 3px rgba(220, 97, 57, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e8e8e0';
              e.target.style.boxShadow = 'none';
            }}
          />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}
        </div>
        <div>
          <label style={labelStyle}>Chủ đề</label>
          <input
            style={inputStyle}
            placeholder="Chủ đề"
            value={values.subject || ''}
            onChange={onChange('subject')}
            onFocus={(e) => {
              e.target.style.borderColor = '#dc6139';
              e.target.style.boxShadow = '0 0 0 3px rgba(220, 97, 57, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e8e8e0';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
        <div>
          <label style={labelStyle}>Nội dung</label>
          <textarea
            style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
            placeholder="Bạn muốn trao đổi gì?"
            value={values.message}
            onChange={onChange('message')}
            onFocus={(e) => {
              e.target.style.borderColor = '#dc6139';
              e.target.style.boxShadow = '0 0 0 3px rgba(220, 97, 57, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e8e8e0';
              e.target.style.boxShadow = 'none';
            }}
          />
          {errors.message && <div style={errorStyle}>{errors.message}</div>}
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button
            type="submit"
            disabled={status === 'submitting'}
            style={{
              padding: '12px 24px',
              borderRadius: 10,
              border: 'none',
              background: '#dc6139',
              color: '#fff',
              cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
              opacity: status === 'submitting' ? 0.7 : 1,
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 600,
              boxShadow: '0 4px 15px rgba(220, 97, 57, 0.3)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (status !== 'submitting') {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = '#c5522d';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 97, 57, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (status !== 'submitting') {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = '#dc6139';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 97, 57, 0.3)';
              }
            }}
          >
            {status === 'submitting' ? 'Đang gửi...' : 'Gửi tin nhắn'}
          </button>
          {status === 'success' && <span style={{ color: '#1a7f37' }}>Đã mở email client</span>}
          {status === 'error' && <span style={{ color: '#c1121f' }}>Gửi thất bại</span>}
        </div>
      </form>

      <div style={{ marginTop: 24, color: '#444', display: 'grid', gap: 8, fontSize: 'clamp(14px, 2vw, 16px)' }}>
        <div>
          <strong>SĐT:</strong>{' '}
          <a href="tel:0902593603" style={{ color: '#111', textDecoration: 'none' }}>
            0902593603
          </a>
        </div>
        <div>
          <strong>Email:</strong>{' '}
          <a href="mailto:ctien.forwork@gmail.com" style={{ color: '#111', textDecoration: 'none' }}>
            ctien.forwork@gmail.com
          </a>
        </div>
        <div>
          <strong>Địa chỉ:</strong> Quận 12, TP. Hồ Chí Minh
        </div>
        <div>
          <strong>Ngày sinh:</strong> 29/12/2002
        </div>
      </div>
    </div>
  );
};

export default Contact;