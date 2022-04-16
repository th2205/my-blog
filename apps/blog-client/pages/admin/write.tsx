import styled from "@emotion/styled";
import SideBar from "@/components/SideBar";
import { useState } from "react";
import Markdown from "@/components/MarkDown";
import Button from "@/components/Button";
import { savePost } from "@/apis/post";
import Input from "@/components/Input";
import { useInput } from "@/hooks/useInput";

export default function Write() {
  const [content, setContent] = useState("");
  const [title, onTitleChange] = useInput("title");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    console.log(1);
    setIsLoading(true);
    const createdAt = new Date();
    const author = "thlim";

    await savePost({ createdAt, title, content, author });
    setIsLoading(false);
  };

  return (
    <Main>
      <SideBar />
      <Section>
        <Header>
          <Input value={title} label="" onChange={onTitleChange} />
          <Button
            label="저장"
            theme="tertiary"
            size="s"
            isLoading={isLoading}
            onClick={onSubmit}
          />
          <Button label="임시 저장" theme="secondary" size="s" />
        </Header>
        <EditorView>
          <Editor
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></Editor>
          <Viewer>
            <Markdown content={content} />
          </Viewer>
        </EditorView>
      </Section>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Header = styled.header`
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: rgb(18, 18, 18);
  border-bottom: 1px solid rgba(168, 179, 207, 0.2);
  padding-left: 1rem;

  button {
    margin-right: 0.5rem;
  }
`;

const Section = styled.section`
  /* display: flex; */
  width: 100%;
  height: calc(100vh - 4rem);
`;

const EditorView = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
`;

const Editor = styled.textarea`
  flex: 1 1 50%;
  background-color: rgb(18, 18, 18);
  border: 0;
  color: white;
  outline: none;
  padding: 3rem 2rem;
`;

const Viewer = styled.div`
  flex: 1 1 50%;
  padding: 0rem 2rem;
  background-color: rgb(18, 18, 18);
  border-left: 1px solid rgba(168, 179, 207, 0.2);
`;
