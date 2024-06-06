// pages/blog/[id]/[slug].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import blogData from '../../../data/blogData';
import styles from '/home/diana/firstday/styles/Blog.module.css';

export const getStaticPaths = async () => {
  const paths = blogData.map((blog) => {
    const slug = blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return {
      params: { id: blog.id.toString(), slug }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const blog = blogData.find((post) => post.id === parseInt(id));

  return {
    props: { blog }
  };
};

const BlogPost = ({ blog }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
      </Head>
      <h1>{blog.title}</h1>
      <p>{blog.author} - {blog.date}</p>
      <p>{blog.description}</p>
      <div>{blog.content}</div>
    </div>
  );
};

export default BlogPost;
