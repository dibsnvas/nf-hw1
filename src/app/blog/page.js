// pages/blog/index.js
import Link from 'next/link';
import styles from '/home/diana/firstday/styles/Blog.module.css';
import blogData from '/home/diana/firstday/data/blogData.js';

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogData.map((blog) => {
          const slug = blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}/${slug}`}>
                <div className={styles.single}>
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
