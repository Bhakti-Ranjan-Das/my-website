import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  created_at: string;
  slug: string;
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {post.title}
            </h2>
            <time className="text-sm text-gray-500 mb-4 block">
              {format(new Date(post.created_at), 'MMMM d, yyyy')}
            </time>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <a
              href={`/blog/${post.slug}`}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}