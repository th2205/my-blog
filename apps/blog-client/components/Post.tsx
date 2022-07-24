import styled from "@emotion/styled";
import MarkDown from "@/components/MarkDown";
import Comment from "@/components/Comment";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Img from "@/components/atoms/Img";

interface PostProps {
  id: number;
  createdAt: Date;
  author: string;
  title: string;
  contentPreview: string;
  content: string;
  coverImgUrl: string;
}

export default function Post({
  createdAt,
  author,
  title,
  coverImgUrl,
  content,
  contentPreview,
}: PostProps) {
  return (
    <PostLayout>
      <PostHeader>
        <Heading as="h1">{title}</Heading>
      </PostHeader>
      <InfoHeader>
        <Text as="span" theme="secondary">
          By Taehyeon
        </Text>
        <Text as="span" theme="secondary" size="s">
          {createdAt}
        </Text>
      </InfoHeader>
      <Img src={coverImgUrl} alt="cover" />
      <div>
        <MarkDown content={content} />
      </div>
      <Comment />
    </PostLayout>
  );
}

const PostLayout = styled.section`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding-top: 6rem;
  animation: fadein 0.3s linear;

  @media (max-width: 800px) {
    padding: 5rem 1rem 0 1rem;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const PostHeader = styled.div`
  margin-bottom: 1rem;
`;

const InfoHeader = styled.div`
  margin-bottom: 2rem;

  & span:nth-of-type(2) {
    margin-left: 1rem;
  }
`;
