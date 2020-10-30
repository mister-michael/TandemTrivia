import React, { useEffect, useState } from "react";

import API from "./modules/apiManager";
import shuffle from './modules/mixItUp';
import TandemTrivia from "./TandemTrivia";

function App() {
  const [randomTen, setRandomTen] = useState(null);

  

  async function getQs() {
    await API.get().then((resp) => {
      console.log(resp);
      const shuffledResp = shuffle(resp);
      setRandomTen(shuffledResp.splice(0, 10));
    });
  }

  useEffect(() => {
    getQs();
  }, []);

  return (
    <div style={{ minWidth: "900px" }}>
      <TandemTrivia randomTen={randomTen}/>
    </div>
  );
}

export default App;
