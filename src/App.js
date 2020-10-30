import React, { useEffect, useState } from "react";

import API from "./modules/apiManager";
import TandemTrivia from "./TandemTrivia";

function App() {
  const [randomTen, setRandomTen] = useState(null);

  const [currentTab, setCurrentTab] = useState();
  const [lastTab, setLastTab] = useState();

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

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
