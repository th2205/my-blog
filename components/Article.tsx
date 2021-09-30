type Article = {
  article: {
    id: string;
    date: string;
    title: string;
    corverImg: string;
  };
};

export default function Article({ article }: Article) {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.date}</p>
    </div>
  );
}
