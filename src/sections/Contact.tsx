import React from 'react';
import LiquidGlass from '../components/liquid-glass';
import type { ContactFormValues, SubmitStatus } from '../types/form';
import { initialContactForm, validateContact } from '../types/form';
import { sendContactEmail } from '../utils/email';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 12,
  border: '1px solid rgba(15, 23, 42, 0.15)',
  background: 'rgba(255, 255, 255, 0.8)',
  fontSize: 14,
  transition: 'all 0.2s',
  color: '#0f172a',
};

const labelStyle: React.CSSProperties = { fontSize: 14, color: '#0f172a', fontWeight: 500 };
const errorStyle: React.CSSProperties = { color: '#d22b2b', fontSize: 12 };

const Contact: React.FC = () => {
  const [values, setValues] = React.useState<ContactFormValues>(initialContactForm);
  const [status, setStatus] = React.useState<SubmitStatus>('idle');
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
      // Close modal after 2 seconds on success
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus('idle');
      }, 2000);
    } catch {
      setStatus('error');
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setStatus('idle');
    setErrors({});
  };

  return (
    <>
      <div style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <LiquidGlass
          layout="inline"
          overLight
          style={{ width: '100%' }}
        >
          <div style={{ display: 'grid', gap: 16, textAlign: 'left' }}>
            <div>
              <p style={{ margin: 0, color: 'rgba(0, 0, 0, 0.5)', letterSpacing: 2, textTransform: 'uppercase', fontSize: 12 }}>Liên hệ</p>
              <h2
                style={{
                  margin: '8px 0 0 0',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  color: '#0f1d2d',
                  fontWeight: 700,
                }}
              >
                Sẵn sàng đồng hành cùng bạn!
              </h2>
              <p style={{ margin: '8px 0 0 0', color: '#475467', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.7 }}>
                Gửi tin nhắn để mình có thể hỗ trợ dự án social media, content planning hoặc sản xuất video ngắn.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {[{ label: 'SĐT', value: '0902593603', link: 'tel:0902593603' }, { label: 'Email', value: 'ctien.forwork@gmail.com', link: 'mailto:ctien.forwork@gmail.com' }, { label: 'Địa chỉ', value: 'Quận 12, TP. Hồ Chí Minh' }, { label: 'Ngày sinh', value: '29/12/2002' }].map((info) => (
                <div key={info.label} style={{ padding: '10px 16px', borderRadius: 999, background: 'rgba(255, 255, 255, 0.3)', color: '#0f172a', fontSize: 14, fontWeight: 500 }}>
                  <span style={{ opacity: 0.7 }}>{info.label}:</span>{' '}
                  {info.link ? (
                    <a href={info.link} style={{ color: '#ff7a50', textDecoration: 'none' }}>
                      {info.value}
                    </a>
                  ) : (
                    info.value
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={openModal}
              style={{
                padding: '14px 28px',
                borderRadius: 14,
                border: 'none',
                background: 'linear-gradient(135deg, #ff9248, #ff6f61)',
                color: '#fff',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 18px 45px rgba(255, 111, 97, 0.35)',
                transition: 'transform 0.2s ease',
                width: 'fit-content',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Gửi tin nhắn
            </button>
          </div>
        </LiquidGlass>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
          onClick={closeModal}
        >
          {/* Modal Content */}
          <LiquidGlass
            layout="inline"
            overLight
            style={{ width: '100%', maxWidth: 620 }}
          >
            <div style={{ width: '100%', maxHeight: '85vh', overflowY: 'auto', padding: 8, position: 'relative' }} onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  background: 'rgba(15, 29, 45, 0.3)',
                  color: '#ffe8d8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontWeight: 600,
                  transition: 'transform 0.2s ease',
                  lineHeight: 1,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg)';
                }}
                aria-label="Close modal"
              >
                ×
              </button>

              <h2
                style={{
                  margin: '0 0 24px 0',
                  fontSize: 'clamp(24px, 4vw, 32px)',
                  color: '#ff9360',
                  fontWeight: 700,
                }}
              >
                Gửi tin nhắn
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
                      e.target.style.borderColor = '#ff8650';
                      e.target.style.boxShadow = '0 0 0 3px rgba(255, 134, 80, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(15, 23, 42, 0.15)';
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
                      e.target.style.borderColor = '#ff8650';
                      e.target.style.boxShadow = '0 0 0 3px rgba(255, 134, 80, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(15, 23, 42, 0.15)';
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
                      e.target.style.borderColor = '#ff8650';
                      e.target.style.boxShadow = '0 0 0 3px rgba(255, 134, 80, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(15, 23, 42, 0.15)';
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
                      e.target.style.borderColor = '#ff8650';
                      e.target.style.boxShadow = '0 0 0 3px rgba(255, 134, 80, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(15, 23, 42, 0.15)';
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
                      borderRadius: 12,
                      border: 'none',
                      background: status === 'submitting' ? 'rgba(255, 255, 255, 0.6)' : 'linear-gradient(135deg, #ff9248, #ff6f61)',
                      color: status === 'submitting' ? '#475467' : '#fff',
                      cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                      opacity: status === 'submitting' ? 0.7 : 1,
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      fontWeight: 600,
                      boxShadow: status === 'submitting' ? 'none' : '0 6px 24px rgba(255, 111, 97, 0.35)',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      if (status !== 'submitting') {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (status !== 'submitting') {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    {status === 'submitting' ? 'Đang gửi...' : 'Gửi tin nhắn'}
                  </button>
                  {status === 'success' && (
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: 12,
                      background: 'rgba(26, 127, 55, 0.12)',
                      border: '1px solid rgba(26, 127, 55, 0.3)',
                      color: '#0f8c4b',
                      fontSize: 14,
                    }}>
                      ✓ Đã mở email client
                    </div>
                  )}
                  {status === 'error' && (
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: 12,
                      background: 'rgba(193, 18, 31, 0.12)',
                      border: '1px solid rgba(193, 18, 31, 0.3)',
                      color: '#c1121f',
                      fontSize: 14,
                    }}>
                      ✗ Gửi thất bại. Vui lòng thử lại.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </LiquidGlass>
        </div>
      )}
    </>
  );
};

export default Contact;