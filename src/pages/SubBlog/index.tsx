import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/molecules/Header';
import { SubBlogHeader } from '../../components/organisms/SubBlogHeader';
import { Footer } from '../../components/organisms/Footer';
import styles from './styles.module.css';
import { SubBlogContent } from '../../components/organisms/SubBlogContent';
import {
  CommentForm,
  CommentFormData,
} from '../../components/molecules/CommentForm';
import Comment from '../../components/molecules/Comment';

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
  const [comments, setComments] = useState<CommentFormData[]>([]);
  const { image, title, content, meta } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
    const commentData = localStorage.getItem('comments');
    setComments(
      commentData ? (JSON.parse(commentData) as CommentFormData[]) : []
    );
  }, []);

  const onSubmit = (data: CommentFormData) => {
    const commentsData: CommentFormData[] = [...comments, data];
    setComments(commentsData);
    localStorage.setItem('comments', JSON.stringify(commentsData));
  };

  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);

    // Extract the date components
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    // Extract the time components
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'pm' : 'am';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Return formatted string
    return `${month}/${day}/${year} ${hours}:${minutes}${amPm}`;
  };
  return (
    <main className={styles.mainContainer}>
      <Header type="web agency" />
      <SubBlogHeader title={title} meta={meta} />
      <SubBlogContent title={title} content={content} image={image} />
      {comments.length > 0 &&
        comments.map((comment) => (
          <Comment
            avatarUrl="https://secure.gravatar.com/avatar/?d=identicon"
            commenterName={comment.name}
            commentDate={formatDate(comment.currentDate)}
            commentText={comment.comment}
          />
        ))}

      <CommentForm onSubmit={onSubmit} />
      <Footer type="web agency" />
    </main>
  );
};

export default SubBlog;
