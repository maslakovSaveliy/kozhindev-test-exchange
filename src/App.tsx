import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useActions } from "./hooks/useActions";

function App() {
  const { getCurrencies } = useActions();
  useEffect(() => {
    getCurrencies();
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
