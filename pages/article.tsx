import React from 'react';
import Link from 'next/link';
interface IArticleProps {
  list: any[];
}
const Article: React.FC<IArticleProps> = ({ list }) => {
  return (
    <div>
      this is article
      <div>
        <Link href='/'>返回</Link>
      </div>
    </div>
  )
}

export default Article;
