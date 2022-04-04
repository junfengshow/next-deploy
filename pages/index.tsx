import React from 'react';
import Link from 'next/link'
interface IHomeProps {
  list?: any[];
  userInfo?: any;
}
const Home: React.FC<IHomeProps> = ({ userInfo }) => {
  return (
    <div>
      <div>
        <Link href='/article'>article</Link>
      </div>
      {userInfo && userInfo.userName}
    </div>
  )
}
// 此函数在构建时被调用
export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  const res = await fetch('http://116.62.145.208:7006/getUser')
  const { data } = await res.json()
  
  return {
    props: {
      userInfo: data,
    },
  }
}
export default Home;
