import Head from 'next/head'; // For meta tags
import styles from '/home/diana/firstday/styles/Blog.module.css';

const blogData = [
  // ... (your blog post data array here)
];

export default async function BlogPost({ params }) {
  const id = parseInt(params.id, 10);
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return <div>Not found</div>;
  }
  
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
      </Head>
      <div>
       
       
          <a className={styles.single}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </a>
        
      </div>
    </>
  );
};
