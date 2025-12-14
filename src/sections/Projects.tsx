import React from 'react';
import type { Project } from '../types/project';

const projects: Project[] = [
  {
    id: 'p1',
    title: 'An Beauty Room',
    description: 'Quản lý và phát triển nội dung video ngắn trên nền tảng TikTok, chịu trách nhiệm toàn bộ quy trình từ chiến lược đến thực thi. Nghiên cứu sâu về kiến thức Beauty, phân tích và xác định hồ sơ khách hàng mục tiêu, từ đó thiết lập hướng phát triển kênh rõ ràng. Trực tiếp lập kế hoạch và thực hiện nội dung, viết nội dung hấp dẫn nhấn mạnh mạnh mẽ sản phẩm của thương hiệu.',
    tags: ['TikTok', 'Content Creator', 'Beauty'],
    liveUrl: '#',
    repoUrl: '#',
    year: 2025,
    period: '25/05/2025 - 30/09/2025',
    image: '/anBeautyRoomAchivement.png',
  },
  {
    id: 'p2',
    title: 'Mr.Tí Đô và Góc Trà',
    description: 'Phát triển và thực hiện Kế hoạch Nội dung chi tiết hàng tuần/tháng được phân loại theo loại nội dung. Đo lường và phân tích kết quả của mỗi bài đăng để liên tục tối ưu hóa chiến lược nội dung.',
    tags: ['TikTok', 'Content Creator', 'F&B'],
    liveUrl: '#',
    repoUrl: '#',
    year: 2025,
    period: '19/02/2025 - 19/05/2025',
    image: '/tido_achivement.png',
  },
  {
    id: 'p3',
    title: 'Tiếp Lửa Tự Hào',
    description: 'Chiến dịch marketing tập trung vào cộng đồng, phân phát đồ uống và quà tặng cho người bán hàng rong và lao động trong dịp lễ Giải phóng miền Nam và Quốc tế Lao động, gắn kết chiến dịch với giá trị cộng đồng cốt lõi để đảm bảo sự đón nhận rộng rãi.',
    tags: ['Marketing', 'Community', 'Đen Đá Coffee'],
    liveUrl: '#',
    repoUrl: '#',
    year: 2025,
    period: '15/04/2025 - 1/05/2025',
    image: '/denda_achivement.png',
  },
  {
    id: 'p4',
    title: 'Một Đời Rực Rỡ',
    description: 'Chiến dịch truyền thông tôn vinh vẻ đẹp vốn có của phụ nữ. Sử dụng thẩm mỹ khung ảnh trắng đặc biệt để ghi lại và lưu giữ vẻ đẹp của họ, kèm theo thông điệp về những người phụ nữ trong gia đình và xã hội xứng đáng được trân trọng trong mọi vai trò họ đảm nhận.',
    tags: ['Marketing', 'Campaign', 'Đen Đá Coffee'],
    liveUrl: '#',
    repoUrl: '#',
    year: 2025,
    period: '13/10/2025 - 20/10/2025',
    image: '/denda_achivement.png',
  },
];

const cardStyle: React.CSSProperties = {
  border: '1px solid #e8e8e0',
  borderRadius: 16,
  overflow: 'hidden',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 2px 8px rgba(220, 97, 57, 0.08)',
  transition: 'all 0.3s ease',
};

const tagStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '6px 12px',
  borderRadius: 999,
  border: '1px solid #e8e8e0',
  fontSize: 12,
  color: '#dc6139',
  background: 'rgba(220, 97, 57, 0.1)',
  fontWeight: 500,
};

const Projects: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <h2
        style={{
          margin: 0,
          fontSize: 'clamp(28px, 4vw, 40px)',
          marginBottom: 24,
          color: '#dc6139',
          fontWeight: 700,
          fontFamily: "'Playfair Display', 'Times New Roman', 'Noto Serif', serif",
        }}
      >
        Dự án
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}
      >
        {projects.map((p) => (
          <article
            key={p.id}
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
            {p.image && (
              <div style={{ width: '100%', overflow: 'hidden' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            )}
            <div style={{ padding: 20, display: 'grid', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, flexWrap: 'wrap' }}>
                  <h3 style={{ margin: 0, fontSize: 'clamp(18px, 3vw, 22px)', color: '#dc6139', flex: 1, fontWeight: 600 }}>
                    {p.title}
                  </h3>
                  {p.year && (
                    <span style={{ color: '#666', fontSize: 'clamp(12px, 2vw, 14px)' }}>{p.year}</span>
                  )}
                </div>
                {p.period && (
                  <p style={{ margin: 0, color: '#666', fontSize: 'clamp(12px, 2vw, 14px)' }}>
                    {p.period}
                  </p>
                )}
              </div>
              <p style={{ margin: 0, color: '#555', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.6 }}>
                {p.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.tags.map((t) => (
                  <span key={t} style={tagStyle}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;