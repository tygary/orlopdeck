import React from "react";
import "./App.css";
import Shop from "./components/Shop";
import Backroom from "./components/Backroom";
import Homepage from "./components/Homepage";
import PostsPage from "./components/Pages/Posts/PostsPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header></header>
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/backroom">
          <Backroom />
        </Route>
        <Route path="/posts">
          <PostsPage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
