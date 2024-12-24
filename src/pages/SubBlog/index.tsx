import { useLocation } from 'react-router-dom';
import { Header } from '../../components/molecules/Header';
import { SubBlogHeader } from '../../components/organisms/SubBlogHeader';
import { Footer } from '../../components/organisms/Footer';
import styles from './styles.module.css';
import { SubBlogContent } from '../../components/organisms/SubBlogContent';
import { CommentForm } from '../../components/molecules/CommentForm';

// const blogData = {
//   title: 'How AI is Transforming Public Sector Services',
//   meta: {
//     author: 'SAKET Gautam',
//     date: 'July 5, 2024',
//     tags: ['AI', 'Technology'],
//   },
//   content: `Artificial Intelligence (AI) has swiftly become a driving force in
//   revolutionizing public sector operations, offering innovative
//   solutions that address longstanding inefficiencies and create new
//   opportunities. By automating repetitive tasks, enhancing
//   decision-making, and providing predictive insights, AI empowers
//   government entities to serve their communities more effectively.
//   <br/> <br/>
//   Public services such as healthcare, transportation, and urban
//   planning have particularly benefited from AI advancements. For
//   example, predictive algorithms now enable healthcare systems to
//   forecast patient needs and optimize resource allocation. Similarly,
//   smart city technologies utilize AI to improve traffic management and
//   reduce energy consumption, creating more sustainable urban
//   environments.
//   <br/> <br/>
//   One of AI's most impactful applications is improving citizen
//   engagement. Chatbots and virtual assistants provide real-time
//   support, allowing individuals to access information and services
//   without delays. These tools not only save time but also ensure that
//   public services remain accessible to all, regardless of technical
//   expertise.
//   <br/> <br/>
//   However, the adoption of AI in the public sector also raises
//   critical considerations. Ensuring data privacy, addressing biases in
//   algorithms, and maintaining transparency are essential steps to
//   foster trust and equity. Governments and organizations must
//   collaborate with technology providers to establish ethical
//   frameworks and robust security measures.
//   <br/> <br/>
//   As AI continues to evolve, its role in the public sector will
//   undoubtedly expand, offering smarter, more sustainable, and
//   citizen-centric solutions. For leaders looking to embrace this
//   technology, the focus should be on understanding its potential and
//   implementing AI in ways that align with societal needs.`,
// };

const SubBlog = () => {
  const location = useLocation();
  const { image, title, content, meta } = location.state || {};

  const onSubmit = () => {};
  return (
    <main className={styles.mainContainer}>
      <Header type="web agency" />
      <SubBlogHeader title={title} meta={meta} />
      <SubBlogContent title={title} content={content} image={image} />
      <CommentForm onSubmit={onSubmit} />
      <Footer type="web agency" />
    </main>
  );
};

export default SubBlog;
