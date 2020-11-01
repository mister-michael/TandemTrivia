import React, { useEffect, useState } from "react";

import API from "./modules/apiManager";
import mixItUp from './modules/mixItUp';
import TandemTrivia from "./TandemTrivia";

function App() {
  const [randomTen, setRandomTen] = useState(null);

  async function getQs() {
    await API.get().then((resp) => {
      const mixedResp = mixItUp(resp);
      setRandomTen(mixedResp.splice(0, 10));
    });
  };

  useEffect(() => {
    getQs();
  }, []);

  return (
    <div style={{ minWidth: "900px" }}>
      <TandemTrivia getQs={getQs} randomTen={randomTen}/>
    </div>
  );
};

export default App;
