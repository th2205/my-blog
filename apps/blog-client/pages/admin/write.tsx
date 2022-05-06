/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import Markdown from "@/components/MarkDown";
import Button from "@/components/Button";
import { savePost } from "@/apis/post";
import Input from "@/components/Input";
import Header from "@/components/Header";
import Exit from "@/components/icons/Exit";
import IconButton from "@/components/IconButton";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

const AUTHOR = "taehyeon";

export default function Write() {
  const [post, setPost] = useState({
    content: "",
    title: "",
    author: AUTHOR,
    coverImgUrl: "",
    contentPreview: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    setIsLoading(true);
    const createdAt = new Date();

    await savePost({ ...post, createdAt });
    setIsLoading(false);
  };

  // return (
  //   <Main>
  //     <SideBar />
  //     <Section>
  //       <Header>
  //         <Input
  //           value={post.title}
  //           label="제목"
  //           onChange={(e) => setPost({ ...post, title: e.target.value })}
  //         />
  //         <Input
  //           value={post.title}
  //           label="프리뷰"
  //           onChange={(e) => setPost({ ...post, title: e.target.value })}
  //         />
  //         <ButtonGroup>
  //           <Button
  //             label="저장"
  //             theme="tertiary"
  //             size="s"
  //             isLoading={isLoading}
  //             onClick={onSubmit}
  //           />
  //           <Button label="임시 저장" theme="secondary" size="s" />
  //         </ButtonGroup>
  //       </Header>
  //       <EditorView>
  //         <Editor
  //           value={post.content}
  //           onChange={(e) => setPost({ ...post, content: e.target.value })}
  //         ></Editor>
  //         <Viewer>
  //           <Markdown content={post.content} />
  //         </Viewer>
  //       </EditorView>
  //     </Section>
  //   </Main>
  // );

  return (
    <Main>
      <div
        css={css`
          width: 2.2rem;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 99;
        `}
      >
        <IconButton onClick={() => router.push("/admin")}>
          <Exit />
        </IconButton>
      </div>
      <section
        css={css`
          width: 40%;
          padding: 1rem;

          & div:first-of-type {
            margin-bottom: 1rem;
          }
        `}
      >
        <Input
          value={post.title}
          placeholder="제목"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <Input
          value={post.contentPreview}
          placeholder="설명"
          onChange={(e) => setPost({ ...post, contentPreview: e.target.value })}
        />
      </section>
      <EditorContainer>
        <Editor
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        ></Editor>
        <Viewer>
          <Markdown content={post.content} />
        </Viewer>
      </EditorContainer>
      <ButtonGroup>
        <Button label="저장" size="s" />
        <Button label="임시저장" size="s" />
      </ButtonGroup>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
`;

// const Header = styled.header`
//   /* height: 4rem; */
//   /* display: flex; */
//   /* align-items: center; */
//   background-color: rgb(18, 18, 18);
//   border-bottom: 1px solid rgba(168, 179, 207, 0.2);
//   padding-left: 1rem;
// `;

const Section = styled.section`
  /* display: flex; */
  width: 100%;
  height: calc(100vh - 4rem);
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-top: 1px solid rgba(168, 179, 207, 0.2);
`;

const Editor = styled.textarea`
  width: 100%;
  flex: 1 1 50%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border: 0;
  color: ${({ theme }) => theme.colors.fontColor};
  outline: none;
  padding: 0.5rem 2rem;
`;

const Viewer = styled.div`
  flex: 1 1 50%;
  padding: 0rem 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-left: 1px solid rgba(168, 179, 207, 0.2);
`;

const ButtonGroup = styled.div`
  display: flex;
  position: fixed;
  bottom: 1rem;

  & > button {
    margin-left: 0.5rem;
  }
`;
