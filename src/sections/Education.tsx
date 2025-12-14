import React from 'react';

const Education: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
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
        Học vấn
      </h2>
      <div
        style={{
          border: '1px solid #e8e8e0',
          borderRadius: 16,
          padding: 24,
          background: '#fff',
          maxWidth: 600,
          boxShadow: '0 2px 8px rgba(220, 97, 57, 0.08)',
        }}
      >
        <h3 style={{ margin: '0 0 8px', fontSize: 'clamp(18px, 3vw, 22px)', color: '#dc6139', fontWeight: 600 }}>
          Khoa Ngoại ngữ
        </h3>
        <p style={{ margin: '0 0 12px', fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: 500, color: '#333' }}>
          Đại học Công nghiệp TP. Hồ Chí Minh
        </p>
        <p style={{ margin: 0, fontSize: 'clamp(14px, 2vw, 16px)', color: '#666' }}>
          17/06/2021 - Hiện tại
        </p>
      </div>

      <div style={{ marginTop: 32 }}>
        <h3 style={{ margin: '0 0 16px', fontSize: 'clamp(20px, 3.5vw, 24px)', color: '#dc6139', fontWeight: 600 }}>
          Khóa học ngoại khóa
        </h3>
        <div
          style={{
            border: '1px solid #e8e8e0',
            borderRadius: 16,
            padding: 24,
            background: '#fff',
            maxWidth: 600,
            boxShadow: '0 2px 8px rgba(220, 97, 57, 0.08)',
          }}
        >
          <h4 style={{ margin: '0 0 12px', fontSize: 'clamp(16px, 3vw, 20px)', color: '#dc6139', fontWeight: 600 }}>
            Ngáo Content
          </h4>
          <p style={{ margin: 0, fontSize: 'clamp(14px, 2vw, 16px)', color: '#555', lineHeight: 1.6 }}>
            Đạt được hiểu biết toàn diện và sâu sắc về các nguyên tắc content marketing.
            Học cách viết và xác định đối tượng mục tiêu, tạo các bài đăng phù hợp với insights khách hàng,
            và áp dụng các công thức đăng bài khác nhau (như AIDA, PAS, v.v.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;

