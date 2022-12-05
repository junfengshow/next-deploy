import React, { useState } from "react";
const prism = require("prismjs");
require("prismjs/components/prism-typescript");
const Layout = (props: any) => {
  const [isReady, setIsReady] = useState(false);
  React.useEffect(() => {
    console.log(prism);
    setIsReady(true);
    prism.highlightAll();
  }, []);
  React.useEffect(() => {
    if (!isReady) {
      return;
    }
    prism.highlightAll();
  }, [isReady]);
  return <>{isReady && props.children}</>;
};
export default Layout;
