import "./App.css";
import { createContext, useState } from "react";
import AddService from "./components/Admin/AddService/AddService";
import CustomerReview from "./components/Dashboard/CustomerReview/CustomerReview";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PaymentPage from "./components/Dashboard/PaymentPage/PaymentPage";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="App">
      <Home></Home>
      <Dashboard></Dashboard>
      <CustomerReview></CustomerReview>
      <PaymentPage></PaymentPage>
      <AddService></AddService>

      <div className="App">
        <UserContext.Provider value={[user, setUser]}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Homepage></Homepage>
              </Route>
              <Route path="/login">
                <LoginFirebase></LoginFirebase>
              </Route>
              <PrivateRoute path="/admin">
                <AdminArea></AdminArea>
              </PrivateRoute>
              <PrivateRoute path="/checkout">
                <Checkout></Checkout>
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
