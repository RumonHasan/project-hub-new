import styles from '../styles/Home.module.css';
import { METHODS } from './utils/crud';
import Layout from '../components/Layout';
import ProjectInjection from '../components/ProjectInjection';

const Home = ()=>{
  return (
    <Layout>
      something
      <h1>Project Injection</h1>
      <ProjectInjection/>
    </Layout>
  )
};

export default Home;