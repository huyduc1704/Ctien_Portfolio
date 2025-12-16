import React from 'react';
import type { Project } from '../types/project';
import ProjectCard from '../components/ProjectCard';

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
    title: 'Mr.Tí Đô',
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
    title: 'Góc Trà',
    description: 'Phát triển và thực hiện Kế hoạch Nội dung chi tiết hàng tuần/tháng được phân loại theo loại nội dung. Đo lường và phân tích kết quả của mỗi bài đăng để liên tục tối ưu hóa chiến lược nội dung.',
    tags: ['TikTok', 'Content Creator', 'F&B'],
    liveUrl: '#',
    repoUrl: '#',
    year: 2025,
    period: '19/02/2025 - 19/05/2025',
    image: '/goctra_achivement.png',
  },
  {
    id: 'p4',
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
    id: 'p5',
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

const Projects: React.FC = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: '64px 16px' }}>
      <h2
        style={{
          margin: 0,
          fontSize: 'clamp(28px, 4vw, 40px)',
          marginBottom: 24,
          color: '#ffe3d3',
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        Featured Projects
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          alignItems: 'stretch',
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;