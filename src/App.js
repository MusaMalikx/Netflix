import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/home.page";
import Preview from "./pages/preview/preview.page";
import Movie from "./pages/movie/movie.page";
import TvShows from "./pages/tv/tv.page";
import NewPopular from "./pages/new-popular/new-popular.page";
import Kid from "./pages/kid/kid.page";
import Login from "./pages/login/login.page";
import Register from "./pages/register/register.page";
import SignUP from "./pages/sign-up/sign-up.page";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser, selectVerification, verify } from './features/user/userSlice';
import Profile from './pages/profile/profile.page';
import './App.scss';
import Verification from './pages/verification/verification.page';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const emailVerification = useSelector(selectVerification);

  useEffect(() => {
    const subscription = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //log in
        dispatch(login(
          {
            uid: userAuth.uid,
            email: userAuth.email,
          }
        ));
        dispatch(verify(auth.currentUser.emailVerified));
        console.log(emailVerification);
      }
      else {
        //logout 
        dispatch(logout());
      }
    });

    return subscription;

  }, [dispatch, emailVerification])

  return (
    <Switch>
      <Route exact path="/">
        {(user) ? <Home /> : <Redirect to="/register" />}
      </Route>
      <Route path='/register'>
        {!user ? <Register /> : <Redirect to="/" />}
      </Route>
      <Route path='/sign-up'>
        {!user ? <SignUP /> : !emailVerification ? <Redirect to="/verification" /> : <Redirect to="/" />}
      </Route>
      <Route path='/login'>
        {!user ? <Login /> : !emailVerification ? <Redirect to="/verification" /> : <Redirect to="/" />}
      </Route>
      <Route path='/profile'>
        {user ? <Profile /> : <Redirect to="/login" />}
      </Route>
      <Route path='/verification'>
        {(user && !emailVerification) ? <Verification /> : emailVerification && <Redirect to="/" />}
      </Route>
      {
        user && emailVerification && (
          <>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route path="/movies">
              <Movie />
            </Route>
            <Route path="/tv-shows">
              <TvShows />
            </Route>
            <Route path="/new-and-popular">
              <NewPopular />
            </Route>
            <Route path="/kid">
              <Kid />
            </Route>
          </>
        )
      }
    </Switch>
  );
}

export default App;