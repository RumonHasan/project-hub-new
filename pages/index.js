import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import ProjectInjection from '../components/ProjectInjection';
// UI library
import { MantineProvider } from '@mantine/core';

const Home = ()=>{
  return (
    <MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
      <Layout>
        something
        <h1>Project Injection</h1>
        <ProjectInjection/>
      </Layout>
    </MantineProvider>
    
  )
};

export default Home;