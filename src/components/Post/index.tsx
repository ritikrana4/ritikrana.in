import React from 'react'
import { motion } from 'framer-motion';

type nodeType = {
    node : {
        id:number,
        title:String,
        background : string,
        time:string,
        url:string
    }
}

export const Post = ({ node } : nodeType) => {
    
    
    const handleRedirect = (url : string) => {
        window.open(url,'_blank')?.focus()
    }

  return (
    <motion.div
      whileHover={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',scale:1.07, rotateX: 6, rotateY: 10,}}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="post"
      style={{backgroundColor:node.background }}
      onClick={()=>handleRedirect(node.url)}
    >
      <h3>{node.title}</h3>
      <span>{node.time}</span>
    </motion.div>
  )
}
