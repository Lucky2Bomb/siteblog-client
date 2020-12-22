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
import ControlPanel from './components/ControlPanel/ControlPanel';
import UserProfile from './components/Profile/UserProfile';
import About from './components/About/About';
import NewPost from './components/NewPost/NewPost';
import EditPost from "./components/Edit/EditPost";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Group from './components/Group/Group';
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
          //unauthorized
          <>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/about" exact component={About} />
              <Route path="/post/:id" component={PostDetails} />
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
            </Switch>
          </>
          :
          //authorized
          <>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/about" exact component={About} />
              <Route path="/post/:id" component={PostDetails} />
              <Route path="/profile" exact component={MyProfile} />
              <Route path="/profile/:email" component={UserProfile} />
              <Route path="/control-panel" component={ControlPanel} />
              <Route path="/new-post" component={NewPost} />
              <Route path="/edit-post/:id" component={EditPost} />
              {/* <Route path="/group/:id" component={Group} /> */}
            </Switch>
          </>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
