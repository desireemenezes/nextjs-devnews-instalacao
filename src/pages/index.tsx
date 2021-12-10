import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';

/** client side reder */

interface Post {
  id: string;
  title: string;
}

export default function Home() {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => { /** simula api */
    fetch('http://localhost:3333/posts').then((response) => {
      response.json().then((data) => {
        setPosts(data);
      })
    })
  },[]);

  return (
    <div>
      Posts
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
