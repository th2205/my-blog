interface PostProps {
  postData: {
    title: string;
    date: string;
    id: string;
  };
  content: string;
}

export default function Post({ postData, content }: PostProps) {
  return (
    <>
      <h1>{postData.title}</h1>
      {/* <h3>{postData.date}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      /> */}
    </>
  );
}
