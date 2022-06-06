/** @jsxImportSource @emotion/react */
import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/router";
import { css, Theme, useTheme } from "@emotion/react";
import Markdown from "@/components/MarkDown";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Exit from "@/components/icons/Exit";
import IconButton from "@/components/IconButton";
import ImgUploadButton from "@/components/ImgUploadButton";
import { useFile } from "@/hooks/useFile";
import { savePost } from "@/apis/post";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { saveImg } from "@/apis/img";

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
  const emotionTheme = useTheme();
  const { previewUrl, onFileSelect } = useFile();
  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));

  const onDrop = async (file: any) => {
    const id = toast.loading("Please wait...");
    const { url } = await saveImg(file[0] as File);

    const markdownImgString = `![img](${url})`;

    setPost({ ...post, content: post.content + markdownImgString });
    toast.update(id, {
      render: "이미지 업로드 완료!",
      type: "success",
      isLoading: false,
      autoClose: 5000,
    });
  };

  const { getRootProps } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop,
  });

  const onSubmit = async () => {
    setIsLoading(true);

    const createdAt = new Date();

    await savePost({ ...post, createdAt });
    setIsLoading(false);
  };

  const onTemporarySaveButtonClick = () => {
    alert("임시저장!");
  };

  return (
    <main css={MainContainer}>
      <div css={iconContainer}>
        <IconButton onClick={() => router.push("/admin")}>
          <Exit />
        </IconButton>
      </div>
      <section css={inputContainer}>
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
        <ImgUploadButton
          label="커버 이미지"
          previewUrl={previewUrl}
          onChange={onFileSelect}
        />
        <div css={buttonGroup}>
          <Button
            label="저장"
            size="s"
            onClick={onSubmit}
            isLoading={isLoading}
          />
          <Button
            label="임시저장"
            size="s"
            onClick={onTemporarySaveButtonClick}
          />
        </div>
      </section>
      <div css={editorContainer}>
        <textarea
          css={editor(emotionTheme)}
          // ref={drop}
          value={post.content}
          {...getRootProps()}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        ></textarea>
        {/* 추후 드래그 영역일때 컴포넌트 보주도록 수정 */}
        {/* {isDragAccept && (
          <div
            css={css`
              width: calc(100% / 2);
              height: 100%;
              background-color: red;
              position: absolute;
            `}
          ></div>
        )} */}
        <div css={viewer}>
          <Markdown content={post.content} />
        </div>
      </div>
    </main>
  );
}

const MainContainer = css`
  width: 100%;
  height: 100vh;
`;

const iconContainer = css`
  width: 2.2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 99;
`;

const inputContainer = css`
  width: 100%;
  height: auto;
  max-width: 30rem;
  padding: 1rem;

  & div {
    margin-bottom: 1rem;
  }
`;

const editorContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  border-top: 1px solid rgba(168, 179, 207, 0.2);
`;

const editor = (emotionTheme: Theme) => css`
  width: 100%;
  flex: 1 1 50%;
  background-color: ${emotionTheme.colors.backgroundColor};
  border: 0;
  color: ${emotionTheme.colors.fontColor};
  outline: none;
  padding: 0.5rem 2rem;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  position: relative;
`;

const viewer = (emotionTheme: Theme) => css`
  flex: 1 1 50%;
  padding: 0rem 2rem;
  background-color: ${emotionTheme.colors.backgroundColor};
  border-left: 1px solid rgba(168, 179, 207, 0.2);
  overflow-y: auto;
`;

const buttonGroup = css`
  margin-top: 1rem;
  display: flex;

  & button:last-of-type {
    margin-left: 0.5rem;
  }
`;
