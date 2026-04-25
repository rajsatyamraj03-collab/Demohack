import React, { useState } from "react";
import Issuer from "./components/Issuer";
import Holder from "./components/Holder";
import Verifier from "./components/Verifier";

function App() {
  const [tab, setTab] = useState("issuer");

  return (
    <div>
      <h1>Decentralized Credential System</h1>

      <button onClick={() => setTab("issuer")}>Issuer</button>
      <button onClick={() => setTab("holder")}>Holder</button>
      <button onClick={() => setTab("verifier")}>Verifier</button>

      {tab === "issuer" && <Issuer />}
      {tab === "holder" && <Holder />}
      {tab === "verifier" && <Verifier />}
    </div>
  );
}

export default App;
