import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import Skeleton from '@mui/material/Skeleton';
import * as S from './styles';
import LeftImage from '../../../assets/images/icons/large-left.svg';
import { BlogCard } from '../../molecules/BlogCard';
import Blog1 from '../../../assets/images/backgrounds/blog1.svg';
import Blog2 from '../../../assets/images/backgrounds/blog2.svg';
import Blog3 from '../../../assets/images/backgrounds/blog3.svg';

const blogPosts = [
  {
    image: Blog1,
    title: 'How AI is Transforming Public Sector Services',
    excerpt:
      'Explore how artificial intelligence is enhancing efficiency, accuracy, and decision-making in public sector operations.',
    meta: {
      author: 'SAKET Gautam',
      date: 'July 5, 2024',
      tags: ['AI', 'Technology'],
    },
    content: `Artificial Intelligence (AI) has swiftly become a driving force in
  revolutionizing public sector operations, offering innovative
  solutions that address longstanding inefficiencies and create new
  opportunities. By automating repetitive tasks, enhancing
  decision-making, and providing predictive insights, AI empowers
  government entities to serve their communities more effectively.
  <br/> <br/>
  Public services such as healthcare, transportation, and urban
  planning have particularly benefited from AI advancements. For
  example, predictive algorithms now enable healthcare systems to
  forecast patient needs and optimize resource allocation. Similarly,
  smart city technologies utilize AI to improve traffic management and
  reduce energy consumption, creating more sustainable urban
  environments.
  <br/> <br/>
  One of AI's most impactful applications is improving citizen
  engagement. Chatbots and virtual assistants provide real-time
  support, allowing individuals to access information and services
  without delays. These tools not only save time but also ensure that
  public services remain accessible to all, regardless of technical
  expertise.
  <br/> <br/>
  However, the adoption of AI in the public sector also raises
  critical considerations. Ensuring data privacy, addressing biases in
  algorithms, and maintaining transparency are essential steps to
  foster trust and equity. Governments and organizations must
  collaborate with technology providers to establish ethical
  frameworks and robust security measures.
  <br/> <br/>
  As AI continues to evolve, its role in the public sector will
  undoubtedly expand, offering smarter, more sustainable, and
  citizen-centric solutions. For leaders looking to embrace this
  technology, the focus should be on understanding its potential and
  implementing AI in ways that align with societal needs.`,
  },
  {
    image: Blog2,
    title: 'Top Cloud Solutions for Scalable Growth',
    excerpt:
      'A guide to the best cloud computing tools that ensure scalability, security, and flexibility for public and private organizations.',
    meta: {
      author: 'ELLIOT WHITE',
      date: 'AUGUSTS 15, 2024',
      tags: ['cloud', 'cybersecurity'],
    },
    content: `
    The integration of AI technologies into public sector operations has proven to be a game-changer in terms of efficiency and cost savings. By automating routine processes, AI enables government agencies to reallocate resources toward higher-priority initiatives, reducing administrative burdens and freeing up valuable time for human oversight.
    <br/>
    <br/>
    For instance, AI-powered document processing systems are streamlining operations in tax administration, social services, and regulatory compliance. These systems can analyze, verify, and organize vast amounts of data with unmatched speed and accuracy, minimizing the risk of human error and ensuring compliance with complex regulations.
    <br/>
    <br/>
    AI is also improving infrastructure management. Predictive maintenance tools, powered by machine learning, allow governments to monitor the condition of roads, bridges, and utilities in real time. By identifying potential issues before they escalate, these tools reduce maintenance costs and prevent service disruptions, ensuring public infrastructure remains reliable.
    <br/>
    <br/>
    In addition, AI enhances disaster response capabilities. Algorithms can analyze real-time data from weather sensors, satellite imagery, and social media to predict natural disasters and coordinate effective responses. This proactive approach not only saves lives but also minimizes damage to property and resources.
    <br/>
    <br/>
    The potential for AI in the public sector extends far beyond simple efficiency gains—it’s about reshaping how governments interact with their communities. As agencies embrace these technologies, they are setting a precedent for innovation and responsiveness in the face of ever-changing public needs.`,
  },
  {
    image: Blog3,
    title: 'UX/UI Design Tips for Building Engaging Websites',
    excerpt:
      'Learn the key principles of UX/UI design to create websites that deliver a seamless and visually appealing user experience.',
    meta: {
      author: 'SAKET Gautam',
      date: 'January 12, 2024',
      tags: ['design', 'ux/ui'],
    },
    content: `
    Creating an engaging website that captivates users and drives conversions requires a strategic approach to UX/UI design. A successful website combines visual appeal with intuitive functionality, delivering a seamless and memorable experience.
    <br/><br/>
    To start, understanding your target audience is crucial. Conducting user research helps identify their preferences, behaviors, and pain points, enabling you to design interfaces that cater to their specific needs. Simplicity is key—opt for clean layouts with clear navigation menus that make it easy for users to find what they’re looking for.
    <br/>
    Visual hierarchy is another fundamental element. Use contrasting colors, bold typography, and strategically placed call-to-action buttons to guide users' attention toward important features. Incorporating white space improves readability and ensures a clutter-free interface, while interactive elements like hover effects and subtle animations add depth to the experience.
    <br/>
    Responsive design is no longer optional—it’s a necessity. Ensure your website adapts seamlessly across devices, from desktops to smartphones, maintaining consistent functionality and visual appeal. Additionally, prioritize fast loading times by optimizing images and minimizing unnecessary code, as slow websites can drive users away.
    <br/>
    Accessibility should also be at the forefront of your design process. Consider features like alt text for images, keyboard navigation, and proper color contrast to ensure your site is inclusive for all users, including those with disabilities.
    <br/>
    Finally, continuous testing and iteration are vital for improvement. Use analytics tools and A/B testing to monitor user interactions and gather insights, refining your design based on data-driven decisions.
    <br/>
    A well-executed UX/UI design goes beyond aesthetics; it builds trust, enhances usability, and ensures your website stands out in a crowded digital landscape. By prioritizing user needs and leveraging innovative design principles, you can create a platform that leaves a lasting impact.
    `,
  },
];
export const Transform = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };
  return (
    <S.MissionContainer>
      <S.MissionContent>
        <S.ImageColumn>
          {isLoading && (
            <Skeleton variant="rectangular" width="100%" height="450px" />
          )}
          <iframe
            src={`https://drive.google.com/file/d/1tqkyhW46fLNq06WHnjDGH6xNmc4CN8Ts/preview`}
            width="100%"
            height="450px"
            allow="autoplay"
            frameBorder="0"
            title="Google Drive Video"
            style={{
              display: isLoading ? 'none' : 'block',
            }}
            onLoad={handleIframeLoad}
          ></iframe>
        </S.ImageColumn>
        <S.ContentColumn>
          <S.MissionInfo>
            <S.Subtitle>OUR STORY - COMING SOON</S.Subtitle>
            <S.Title>From Humble Beginnings</S.Title>
            <S.Description>
              From humble beginnings in a small town in India, our director's
              journey has grown into a trusted partner for innovation, building
              a company generating over £20 million and delivering impactful
              solutions that make a difference for people everywhere.
            </S.Description>
            <S.SkillsGrid>
              <S.MoreDetails
                onClick={() => {
                  navigate(`/services`);
                }}
              >
                More Details
              </S.MoreDetails>
            </S.SkillsGrid>
          </S.MissionInfo>
        </S.ContentColumn>
      </S.MissionContent>
      <S.BlogSection>
        <S.SectionTitle>Latest from Blog</S.SectionTitle>
        <S.BlogDescription>
          Stay informed with the latest insights, trends, and updates from our
          team. Explore how technology and innovation are shaping the future of
          public services.
        </S.BlogDescription>
        <S.BlogGrid>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </S.BlogGrid>
      </S.BlogSection>
      <S.RightDirection image={LeftImage} />
    </S.MissionContainer>
  );
};
export default Transform;
