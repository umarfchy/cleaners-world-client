import "./App.css";
import { createContext, useState } from "react";
import CustomerReview from "./components/Dashboard/CustomerReview/CustomerReview";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PaymentPage from "./components/Dashboard/PaymentPage/PaymentPage";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginFirebase from "./components/LoginFirebase/LoginFirebase";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Admin from "./components/Admin/Admin/Admin";

export const UserContext = createContext();
export const ServiceContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
  });
  const [selectedService, setSelectedService] = useState({
    userName: "",
    userEmail: "",
    serviceName: "",
    servicePrice: "",
    serviceId: "",
  });
  return (
    <div className="App">
      <div className="App">
        <UserContext.Provider value={[user, setUser]}>
          <Router>
            <Switch>
              <ServiceContext.Provider
                value={[selectedService, setSelectedService]}
              >
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/login">
                  <LoginFirebase></LoginFirebase>
                </Route>
                <PrivateRoute path="/payment">
                  <PaymentPage></PaymentPage>
                </PrivateRoute>
              </ServiceContext.Provider>
              <PrivateRoute path="/admin">
                <Admin></Admin>
              </PrivateRoute>
              <PrivateRoute path="/addreview">
                <CustomerReview></CustomerReview>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <Route path="/*">
                <div>
                  <h1>Nothing was found</h1>
                </div>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
