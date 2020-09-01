import React, { useState } from "react";
import Login from "./Components/IndexPage";
import WebContent from "./Components/WebContent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cookie from "universal-cookie";

const cookie = new Cookie();
const userSession = cookie.get("userSession");
function App() {
  return (
    <div>
      {userSession ? (
        <Router>
          <WebContent userRole={userSession.userRole} />
        </Router>
      ) : (
        <div>
          <Router>
            <Route exact path="/">
              <Login />
            </Route>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
