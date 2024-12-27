import styled from 'styled-components';

export const CommentContainer = styled.div`
  border-top: 1px solid #e0e0e0;
  padding: 1.5rem 0;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  width: 90%;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Content = styled.div`
  flex: 1;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

export const CommenterName = styled.span`
  font-weight: bold;
  color: #333;
`;

export const CommentDate = styled.span`
  font-size: 0.85rem;
  color: #777;
`;

export const CommentText = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

export const GravatarLink = styled.a`
  font-size: 0.85rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ReplyLink = styled.a`
  font-size: 0.85rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
