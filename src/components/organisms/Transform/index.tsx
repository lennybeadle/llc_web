import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import * as S from './styles';
import LeftImage from '../../../assets/images/icons/large-left.svg';
import { BlogCard } from '../../molecules/BlogCard';
import Blog1 from '../../../assets/images/backgrounds/aboutBlog1.svg';
import Blog2 from '../../../assets/images/backgrounds/aboutBlog2.svg';
import Blog3 from '../../../assets/images/backgrounds/aboutBlog3.svg';
const blogPosts = [
  {
    image: Blog1,
    title: 'Why Software Customization is Key for Success',
    excerpt:
      'Tailored software solutions can make or break your operations. Find out how customized tools can streamline processes and boost productivity.',
    meta: {
      author: 'SAKET Gautam',
      date: 'July 5, 2024',
      tags: ['agency', 'news'],
    },
    content: '',
  },
  {
    image: Blog2,
    title: 'How AI is Transforming Public Sector Services',
    excerpt:
      'Explore how artificial intelligence is enhancing efficiency, accuracy, and decision-making in public sector operations',
    meta: {
      author: 'SAKET Gautam',
      date: 'July 5, 2024',
      tags: ['news'],
    },
    content: '',
  },
  {
    image: Blog3,
    title: 'Donec Adipiscing Tristique Risus Nec Feugiat',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
    meta: {
      author: 'SAKET Gautam',
      date: 'July 5, 2024',
      tags: ['news'],
    },
    content: '',
  },
];
export const Transform = () => {
  const navigate = useNavigate();

  return (
    <S.MissionContainer>
      <S.MissionContent>
        <S.ImageColumn>
          <iframe
            src={`https://drive.google.com/file/d/1tqkyhW46fLNq06WHnjDGH6xNmc4CN8Ts/preview`}
            width="100%"
            height="450px"
            allow="autoplay"
            frameBorder="0"
            title="Google Drive Video"
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
