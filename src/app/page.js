'use client';
import Link from 'next/link';
import styles from '/home/diana/firstday/src/app/home.module.css'; // Update the path

const posts = [
  // ... (your blog post data from the JSON array)
];

const HomePage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.intro}> {/* Added section for intro content */}
        <h1 className={styles.title}>Welcome to Our Blog!</h1>
        <p>
          We're a group of students who love to share our thoughts and
          experiences on everything from school life to pop culture. Our goal is
          to entertain, inform, and maybe even make you laugh a little.
        </p>
      </section>

      <section className={styles.latestPosts}> 
        <h2>Latest Posts</h2>
        <ul className={styles.latestPostsList}>
          <li>How to Sneak Your Phone into Class Like a Pro</li>
          <li>10 Reasons Why Avocado Toast is the Secret to Happiness</li>
          <li>Memes That Will Make Your Mom Say 'What?'</li>
        </ul>
        <p className={styles.exploreMore}>
          Click on the links above or check out our <Link href="/blog">Blog</Link> page for more awesome content!
        </p>
      </section>

      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.id} className={styles.card}>
            <Link href={`/blog/${post.id}`}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
            </Link>
            <p className={styles.cardDescription}>{post.description}</p>
            <div className={styles.cardMeta}>
              <span>By {post.author}</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
