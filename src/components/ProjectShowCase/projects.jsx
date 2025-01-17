import { Typography, Row, Col, Card, Button} from "antd";
import {LinkOutlined, CodeOutlined} from "@ant-design/icons";
const {Title, Text} = Typography

const ProjectShowcase = () => {
    const projects = [
      {
        title: 'MERN Stack Project',
        description: 'Blogging App RestFul API',
        image: 'https://storage.googleapis.com/a1aa/image/D5rDF4yt6ugdFuw8GjjhLTNUg_i2h9wXiCQjTusBTkI.jpg',
        liveLink: '#',
        sourceCodeLink: '#',
        bgColor: '#1E293B', // Dark teal
      },
      {
        title: 'Money Monitor Webapp Project',
        description: 'Expense Tracker App',
        image: 'https://storage.googleapis.com/a1aa/image/tqsQBUVcI7vdtD4KXsIgAWWdLIJdZj_UPldVojl9CXQ.jpg',
        liveLink: '#',
        sourceCodeLink: '#',
        bgColor: '#2D3748', // Dark gray
      },
      {
        title: 'Project',
        description: 'Description of the project goes here.',
        image: 'https://storage.googleapis.com/a1aa/image/IM9wq2_ADM8kbo7jQAK2WGKuBu4vNyrzfScvh9ysWKU.jpg',
        liveLink: '#',
        sourceCodeLink: '#',
        bgColor: '#F87171', // Red
      },
      {
        title: 'Men\'s Fashion',
        description: 'Description of the project goes here.',
        image: 'https://storage.googleapis.com/a1aa/image/03tp_jTdQkJbCw9dyYtgSDLdsWUnj5aYgzgkuZBrAec.jpg',
        liveLink: '#',
        sourceCodeLink: '#',
        bgColor: '#1E293B', // Dark teal
      },
    ];
  
    return (
      <div style={{ backgroundColor: '#0f172a', padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Title level={1} className="text-white">My Projects and Profiles</Title>
          <Title level={2} className="text-gray-400">Portfolio</Title>
        </div>
  
        <Row gutter={[16, 16]} justify="center">
          {projects.map((project, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                cover={<img alt={project.title} src={project.image} />}
                style={{
                  backgroundColor: project.bgColor,
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Title level={3} className="text-white">{project.title}</Title>
                <Text className="text-lg text-gray-300">{project.description}</Text>
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
                  <Button
                    type="primary"
                    icon={<LinkOutlined />}
                    href={project.liveLink}
                    target="_blank"
                    style={{ backgroundColor: '#2D9CDB', borderColor: '#2D9CDB' }}
                  >
                    See Live
                  </Button>
                  <Button
                    type="default"
                    icon={<CodeOutlined />}
                    href={project.sourceCodeLink}
                    target="_blank"
                    style={{ backgroundColor: '#F2C94C', borderColor: '#F2C94C' }}
                  >
                    Source Code
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };

export default ProjectShowcase;