import Head from "next/head";
import Header from "../../components/Header.jsx";
import mdParser from "../../lib/MDparser";

export default function First({ allPostsData }) {
  console.log(allPostsData);
  return (
    <>
      <p>helloddd</p>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = mdParser.parse();
  return {
    props: {
      allPostsData: allPostsData,
    },
  };
}
