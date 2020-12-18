import React, { useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registration from './components/Authorization/Registration';
import Login from './components/Authorization/Login';
import { useSelector, useDispatch } from "react-redux";
import { auth } from './actions/user';
import Main from "./components/Main/Main";
import MyProfile from './components/Profile/MyProfile';
import PostDetails from './components/PostDetails/PostDetails';
import { getPost } from "./actions/post";

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  });

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        {!isAuth ?
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/post/:id" component={PostDetails} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
          </Switch>
          :
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/post/:id" component={PostDetails} />
            <Route path="/profile" component={MyProfile} />
          </Switch>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
