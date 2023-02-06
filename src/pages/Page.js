import { useParams } from "react-router-dom";

const Page = () => {
  const staticData = [
    {
      slug: "html",
      title: "HTML Tutorial",
      description:
        "HTML is the standard markup language for creating Web pages.",
    },
    {
      slug: "css",
      title: "CSS Tutorial",
      description: "CSS is the language we use to style an HTML document.",
    },
    {
      slug: "javascript",
      title: "Javascript tutorial",
      description:
        "JavaScript is the worlds most popular programming language.",
    },
    {
      slug: "react",
      title: "React tutorial",
      description:
        "React is a JavaScript library for building user interfaces.",
    },
  ];

  const { slug } = useParams();
  const pageData = staticData.find((r) => r.slug === slug);

  return (
    <div>
        <h1>{pageData.title}</h1>
        <div>
            {pageData.description}
        </div>
    </div>
  );
};
export default Page;
