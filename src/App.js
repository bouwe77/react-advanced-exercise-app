import React from "react";

import styles from "./App.module.css";

import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className={styles.app}>
      <Header appInfo={appInfo} />
      <div className={styles.content}>
        <SearchPage />
      </div>
      <Footer appInfo={appInfo} />
    </div>
  );
}

export default App;

const appInfo = {
  appShortName: "jaze",
  appLongName: "just another zearch engine",
  author: "Bouwe",
  website: "https://bouwe.io"
};
