import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import CoinPage from "./pages/CoinPage";
import Homepage from "./pages/Homepage";

import { makeStyles } from "@material-ui/core";

import Alert from "../src/components/Alert";
 
const App = () => {
  const useStyles = makeStyles({
    App: {
      backgroundColor: "#fff",
      color: "white",
      minHeight: "100vh",
    },
  });

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
      <Alert />
    </BrowserRouter>
  );
};

export default App;
