import React from 'react';

type Experience = {
  id: string;
  company: string;
  position: string;
  period: string;
  type: string;
  industry: string;
  description: string[];
  logo?: string;
  achievement?: string;
};

const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Đen Đá Coffee',
    position: 'Social Media - Freelancer',
    period: '01/7/2025 - Hiện tại',
    type: 'Freelancer',
    industry: 'F&B',
    logo: '/denda.png',
    achievement: '/denda_achivement.png',
    description: [
      'Xác định và lọc nội dung phù hợp với hình ảnh thương hiệu',
      'Thực hiện quay phim tại hiện trường, đảm bảo chất lượng nội dung với chỉnh sửa hậu kỳ cần thiết',
      'Có kinh nghiệm booking KOLs/KOCs có phong cách phù hợp với thẩm mỹ của thương hiệu (cơ sở người xem, người theo dõi, phong cách và định dạng nội dung)',
      'Quản lý fanpage thương hiệu (Facebook, TikTok, Instagram) để phân tích dữ liệu, đánh giá hiệu suất đăng bài và tương tác với khách hàng',
    ],
  },
  {
    id: 'exp2',
    company: 'Nubé',
    position: 'Social Media - Freelancer',
    period: '19/09/2025 - Hiện tại',
    type: 'Freelancer',
    industry: 'Beauty',
    logo: '/nube.png',
    achievement: '/nube_achivement.png',
    description: [
      'Xác định và lọc nội dung phù hợp với hình ảnh thương hiệu',
      'Thực hiện quay phim tại hiện trường, đảm bảo chất lượng nội dung với chỉnh sửa hậu kỳ cần thiết',
      'Có kinh nghiệm booking KOLs/KOCs có phong cách phù hợp với thẩm mỹ của thương hiệu',
      'Quản lý fanpage thương hiệu (Facebook, TikTok, Instagram) để phân tích dữ liệu, đánh giá hiệu suất đăng bài và tương tác với khách hàng',
    ],
  },
  {
    id: 'exp3',
    company: 'An Beauty Room',
    position: 'Content Creator - Freelancer',
    period: '1/06/2025 - 30/09/2025',
    type: 'Freelancer',
    industry: 'Beauty',
    logo: '/anbeautyroom.png',
    achievement: '/anBeautyRoomAchivement.png',
    description: [
      'Quản lý và phát triển nội dung video ngắn trên nền tảng TikTok, chịu trách nhiệm toàn bộ quy trình từ chiến lược đến thực thi',
      'Nghiên cứu sâu về kiến thức Beauty, phân tích và xác định hồ sơ khách hàng mục tiêu, từ đó thiết lập hướng phát triển kênh rõ ràng',
      'Trực tiếp lập kế hoạch và thực hiện nội dung, viết nội dung hấp dẫn nhấn mạnh mạnh mẽ sản phẩm của thương hiệu',
    ],
  },
  {
    id: 'exp4',
    company: 'Mr.Tí Đô - Góc Trà',
    position: 'TikTok Content Creator - Intern',
    period: '19/02/2025 - 19/05/2025',
    type: 'Intern',
    industry: 'F&B',
    logo: '/tido.png',
    achievement: '/tido_achivement.png',
    description: [
      'Phát triển và thực hiện Kế hoạch Nội dung chi tiết hàng tuần/tháng được phân loại theo loại nội dung',
      'Đo lường và phân tích kết quả của mỗi bài đăng để liên tục tối ưu hóa chiến lược nội dung',
    ],
  },
];

const cardStyle: React.CSSProperties = {
  border: '1px solid #e8e8e0',
  borderRadius: 16,
  padding: 24,
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  boxShadow: '0 2px 8px rgba(220, 97, 57, 0.08)',
  transition: 'all 0.3s ease',
};

const tagStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '6px 14px',
  borderRadius: 999,
  border: '1px solid #e8e8e0',
  fontSize: 12,
  color: '#dc6139',
  background: 'rgba(220, 97, 57, 0.1)',
  fontWeight: 500,
};

const Experience: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: 32, textAlign: 'center' }}>
        <img
          src="/work-experience.png"
          alt="Kinh nghiệm làm việc"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: 12,
            marginBottom: 24,
          }}
        />
        <h2
          style={{
            margin: 0,
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: '#dc6139',
            fontWeight: 700,
            fontFamily: "'Playfair Display', 'Times New Roman', 'Noto Serif', serif",
          }}
        >
          Kinh nghiệm làm việc
        </h2>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}
      >
        {experiences.map((exp) => (
          <article
            key={exp.id}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(220, 97, 57, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(220, 97, 57, 0.08)';
            }}
          >
            {exp.logo && (
              <div style={{ marginBottom: 12 }}>
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  style={{
                    maxWidth: '120px',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 style={{ margin: 0, fontSize: 'clamp(18px, 3vw, 22px)', color: '#dc6139', fontWeight: 600 }}>
                {exp.company}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
                <span style={tagStyle}>{exp.type}</span>
                <span style={tagStyle}>{exp.industry}</span>
              </div>
              <p style={{ margin: 0, fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 500, color: '#333' }}>
                {exp.position}
              </p>
              <p style={{ margin: 0, fontSize: 'clamp(12px, 2vw, 14px)', color: '#666' }}>
                {exp.period}
              </p>
            </div>
            <ul style={{ margin: 0, paddingLeft: 20, color: '#444', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            {exp.achievement && (
              <div style={{ marginTop: 12 }}>
                <img
                  src={exp.achievement}
                  alt={`${exp.company} achievement`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 8,
                    objectFit: 'cover',
                  }}
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Experience;

