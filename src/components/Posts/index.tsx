import React from 'react'
import { Post } from '../Post'
import './style.css';
import { AnimatePresence } from 'framer-motion';

interface DataItem {
    id: number;
    title: string;
    background:string;
    time:string;
    url:string

}
type PostsProps = {
    data: DataItem[];
};

export const Posts = ({data = [],...props}:PostsProps) => {
    return (
      <div className='posts'>
        <AnimatePresence>
        {data.map((post) => (
          <Post
            key={post.id}
            node={post}
            {...props}
          />
        ))}
        </AnimatePresence>
      </div>
    )
}
