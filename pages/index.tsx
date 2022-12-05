import React from "react";
import Link from "next/link";
import Layout from "../layout";
interface IHomeProps {
  list?: any[];
  userInfo?: any;
}
const Home: React.FC<IHomeProps> = ({ userInfo }) => {
  return (
    <Layout>
      <div>
        <Link href="/article">article</Link>
      </div>
      {userInfo && userInfo.userName}
    </Layout>
  );
};
export default Home;
