import Header from "./components/Header/Header";
import SideBar from "./components/Header/SideBar";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Mail from "./components/mail/Mail";
import EmailList from "./components/mail/EmailList";
import SendMail from "./components/mail/SendMail";
import {useSelector} from 'react-redux';
import {selectedMessageIsOpen } from "./redux/features/mailSlice";
import { login,logout,selectUser } from "./redux/features/userSlice";
//import { login, logout, selectUser } from "./features/userSlice";
import { auth, onAuthStateChanged } from "./firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Login from "./components/authentication/Login";
import "./App.css";
function App() {
  const sendMessageIsOpen=useSelector(selectedMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    console.log("page loaded");
  }, []);
  return (
    <Router>
      {!user ? <Login/> :

      <div className="app">
        <Header />

        <div className="app__body">
          <SideBar />
          <Routes>
          <Route exact path="/" element={<EmailList/>} />

            <Route exact path="/mail" element={<Mail/>} />

          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail/>}
      </div>}
      </Router>

  );
}

export default App;
