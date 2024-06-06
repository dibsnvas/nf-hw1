'use client';
import Link from 'next/link';

export default function About() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333' }}>About Us</h1>
      <p style={{ fontSize: '1.3rem', color: '#666' }}>
        Welcome to our little corner of the internet, where we share stories, ideas, and experiences that ignite curiosity and spark conversations.
      </p>
      <p style={{ fontSize: '1.3rem', color: '#666' }}>
        Our blog is more than just a collection of posts; it's a community of passionate individuals who love to explore the world around them. From thought-provoking articles to light-hearted musings, we aim to bring you content that not only informs but also inspires.
      </p>
      <p style={{ fontSize: '1.3rem', color: '#666' }}>
        Each piece we publish is a labor of love, crafted with care and attention to detail. We believe in the power of words to connect people, and we're committed to creating a space where diverse voices can be heard and appreciated.
      </p>
      <p style={{ fontSize: '1.3rem', color: '#666' }}>
        Whether you're here for a quick read or a deep dive into a new topic, we hope you find something that resonates with you. Thank you for joining us on this journey, and we look forward to sharing many more stories with you.
      </p>
      <p style={{ fontSize: '1.3rem', color: '#666' }}>
        Stay curious, stay inspired.
      </p>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        With love <br />
      </p>
    </main>
  );
}
