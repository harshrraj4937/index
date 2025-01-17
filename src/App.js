import React from "react";
import avatar from "./images/avatar.png"
import { Layout, Menu, ConfigProvider, Switch, theme , Button} from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined, BulbOutlined, LinkOutlined, CodeOutlined} from "@ant-design/icons";
import { Card, List, Row, Col, Typography } from 'antd';

import "antd/dist/reset.css";
import "./App.css";
const { Text, Title } = Typography;
const { Header, Content, Footer } = Layout;

const Terminal = () => (
  <Card style={{ background: "#1c1c1c", color: "#39ff14" }} bordered={false}>
    <pre>
      ForrestKnight (FK) Not A Corporation. All knights reserved. {"\n\n"}
      {"        _.-'''''-._"} {"\n"}
      {"      .'  _     _  '."} {"\n"}
      {"     /   (_)   (_)   \\"} {"\n"}
      {"    |  ,           ,  |"} {"\n"}
      {"    |  \\`.       .`/  |"} {"\n"}
      {"     \\  '.`'\"\"'\"`.'  /"} {"\n"}
      {"      '.  `'---'`  .'"} {"\n"}
      {"        '-._____.-"} {"\n"}
      {"\n"}
      {"------------------------------------------------"} {"\n"}
      {"Welcome to my interactive web terminal."} {"\n"}
      {"For a list of available commands, type "}
      <span style={{ color: "#4a90e2" }}>`help`</span>. {"\n"}
      visitor@fkcodes.com:~${" "}
    </pre>
  </Card>
);

const App = () => {

  const [darkMode, setDarkMode] = React.useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ConfigProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>Harshraj Sadwelkar</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Projects</Menu.Item>
            <Menu.Item key="4">Contact</Menu.Item>
          </Menu>
          <Switch
            checkedChildren={<BulbOutlined />}
            unCheckedChildren={<BulbOutlined />}
            checked={darkMode}
            onChange={toggleTheme}
          />
        </Header>
        <Content  style={{ padding: "20px", textAlign: "center" }}>
          <SideBySideDisplay avatar={avatar}/>
      </Content>
        <Content style={{ padding: "20px", textAlign: "center" }}>
          <div>
            <h1>Welcome to My Portfolio</h1>
            <p>Software Engineer | Full-Stack Developer | Cloud & Edge Computing Enthusiast</p>
            <p>Explore my work and projects below.</p>
          </div>
          <ProjectShowcase/>
          <SkillCard/>
        </Content>
        <Footer style={{ textAlign: "center", background: darkMode ? "#001529" : "#f0f0f0", color: darkMode ? "white" : "black" }}>
          <div>
            <a href="https://github.com/harshrraj4937" target="_blank" rel="noopener noreferrer">
              <GithubOutlined style={{ fontSize: "1.5rem", margin: "0 10px" }} />
            </a>
            <a href="https://www.linkedin.com/in/harshrraj4937/" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined style={{ fontSize: "1.5rem", margin: "0 10px" }} />
            </a>
            <a href="mailto:harshrraj4937@gmail.com" target="_blank" rel="noopener noreferrer">
              <MailOutlined style={{ fontSize: "1.5rem", margin: "0 10px" }} />
            </a>
          </div>
          <div>©2025 Harshraj Sadwelkar. All rights reserved.</div>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

const SideBySideDisplay = ({ avatar }) => {
  return (
    <div style={styles.container}>
      <div style={styles.terminalWrapper}>
        <Terminal />
      </div>
      <div style={styles.imageWrapper}>
        <img
          alt="Person standing with arms crossed, surrounded by neon pink square frames"
          src={avatar}
          style={styles.image}
        />
        <div style={styles.buttonWrapper}>
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  terminalWrapper: {
    width: '70%',
  },
  imageWrapper: {
    position: 'relative',
    width: '30%',
    height: '400px', // Maintain a consistent height
  },
  image: {
    borderRadius: '8px',
    objectFit: 'contain', // Ensures the whole image fits within the container without cropping
    width: '100%',
    height: '100%', // Ensure the image takes up the container height without cutting off
  },
  buttonWrapper: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    background: 'transparent',
    color: 'white',
    border: 'none',
  },
};


const SkillCardItem = ({ title, skills, backgroundColor, textColor }) => {
  return (
    <Card
      title={<Text className={`text-xl font-semibold ${textColor}`}>{title}</Text>}
      bordered={false}
      style={{ backgroundColor: backgroundColor, borderRadius: '8px', 
        width: '100%', // The card should take up full available space
        minWidth: '25%', // Ensure the card does not shrink below 40% of the screen width
      }}
      
    >
      <List
        dataSource={skills}
        renderItem={(item) => (
          <List.Item>
            <Row style={{ width: '100%' }} justify="space-between">
              <Text>{item.skill}</Text>
              <Text className="text-gray-400">{item.level}</Text>
            </Row>
          </List.Item>
        )}
      />
    </Card>
  );
};


const SkillCard = () => {
  const frontendSkills = [
    { skill: 'HTML', level: 'Intermediate' },
    { skill: 'CSS', level: 'Basic' },
    { skill: 'JavaScript', level: 'Intermediate' },
    { skill: 'TypeScript', level: 'Intermediate' },
    { skill: 'React', level: 'Basic' },
    { skill: 'BootStrap', level: 'Intermediate' },
  ];

  const backendSkills = [
    { skill: 'Golang', level: 'Advanced' },
    { skill: 'Java Core', level: 'Advanced' },
    { skill: 'Django Framework', level: 'Advanced' },
    { skill: 'SpringBoot', level: 'Intermediate' },
    { skill: 'CS Fundamentals (DSA, OOPS, CN, OS)', level: 'Advanced' },
    { skill: 'Tools and Dependencies (Redis, Celery, RabbitMQ, MQTT, Graphql, Postgres, Hasura, Signoz, Prometheus)', level: 'Intermediate' },
  ];

  return (
    <div style={{ backgroundColor: '#0f172a', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <Text className="text-lg text-gray-400">What Skills I have</Text>
        <Title className="text-3xl font-bold text-white">My Expertise</Title>
      </div>

      <Row gutter={16} justify="center">
        <Col xs={24} md={12}>
          <SkillCardItem
            title="Frontend Development"
            skills={frontendSkills}
            backgroundColor="#1e293b"
            textColor="text-green-300"
          />
        </Col>

        <Col xs={24} md={12}>
          <SkillCardItem
            title="Backend Development"
            skills={backendSkills}
            backgroundColor="#134e4a"
            textColor="text-green-300"
          />
        </Col>
      </Row>

      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        {/* <div>
          <a href="#" style={{ margin: '0 10px' }}><HomeOutlined className="text-green-300" /></a>
          <a href="#" style={{ margin: '0 10px' }}><SearchOutlined className="text-gray-400" /></a>
          <a href="#" style={{ margin: '0 10px' }}><HeartOutlined className="text-gray-400" /></a>
          <a href="#" style={{ margin: '0 10px' }}><FileTextOutlined className="text-gray-400" /></a>
          <a href="#" style={{ margin: '0 10px' }}><UserOutlined className="text-gray-400" /></a>
        </div> */}
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  const projects = [
    {
      title: 'SpringBoot API Project',
      description: 'Blogging App RestFul API',
      image: 'https://storage.googleapis.com/a1aa/image/D5rDF4yt6ugdFuw8GjjhLTNUg_i2h9wXiCQjTusBTkI.jpg',
      liveLink: '#',
      sourceCodeLink: '#',
      bgColor: '#1E293B', // Dark teal
    },
    {
      title: 'JSP Servlet Webapp Project',
      description: 'Hospital Management App',
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


export default App;
