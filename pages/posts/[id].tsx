import mdParser from "../../lib/MDparser";

export default function Post({ postData }) {
  return <div>111</div>;
}

export async function getStaticPaths() {
  const paths = mdParser.getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = mdParser.getPostDataByid(params.id);

  return {
    props: {
      postData,
    },
  };
}
