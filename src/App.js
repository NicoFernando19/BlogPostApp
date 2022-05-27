import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import ListPostComponent from "./components/ListPostComponent";
import PostDetailComponent from "./components/PostDetailComponent";
import UserDetailComponent from "./components/UserDetailComponent";

function App() {
  return (
    <div className="container-fluid">
      <Fragment>
        <Router>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" element={<ListPostComponent />}>
              <div className="my-5">
                <ListPostComponent />
              </div>
            </Route>
            <Route exact path="/post/:postId" element={<PostDetailComponent />}>
              <div className="my-5">
                <PostDetailComponent />
              </div>
            </Route>
            <Route exact path="/user/:userId" element={<UserDetailComponent />}>
              <div className="my-5">
                <UserDetailComponent />
              </div>
            </Route>
            <Route>404 Not Found</Route>
          </Switch>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
