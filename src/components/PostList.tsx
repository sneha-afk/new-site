import React from "react";
import { Link } from "react-router-dom";
import { usePosts } from "@context/PostsContext";
import "@styles/_post_list.scss";

import { LoadingSpinner } from "@components";

export interface Post {
  slug: string;
  title: string;
  date: string;
}

interface PostListProps {
  limit?: number;
}

const PostList: React.FC<PostListProps> = ({ limit }) => {
  const { posts, loading } = usePosts();

  if (loading)
    return (
      <LoadingSpinner text="Loading list of posts..." fullscreen={false} />
    );

  const displayPosts = posts.slice(0, limit ?? undefined);

  return (
    <ul className="post-list">
      {displayPosts.map((post) => (
        <li key={post.slug} className="post-card">
          <Link to={`/blog/${post.slug}`}>
            <span className="post-date">{post.date}</span>
            <span className="post-title">{post.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
