import * as S from './styles';
interface CommentProps {
  avatarUrl: string;
  commenterName: string;
  commentDate: string;
  commentText: string;
}
const Comment: React.FC<CommentProps> = ({
  avatarUrl,
  commenterName,
  commentDate,
  commentText,
}) => {
  return (
    <S.CommentContainer>
      <S.Avatar src={avatarUrl} alt={`${commenterName}'s avatar`} />
      <S.Content>
        <S.CommentHeader>
          <div>
            <S.CommenterName>{commenterName}</S.CommenterName>
            <S.CommentDate> — {commentDate}</S.CommentDate>
          </div>
          <S.ReplyLink href="#">Reply</S.ReplyLink>
        </S.CommentHeader>
        <S.CommentText>{commentText}</S.CommentText>
      </S.Content>
    </S.CommentContainer>
  );
};

export default Comment;
