import "./App.css";
import AddService from "./components/Admin/AddService/AddService";
import CustomerReview from "./components/Dashboard/CustomerReview/CustomerReview";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PaymentPage from "./components/Dashboard/PaymentPage/PaymentPage";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <Dashboard></Dashboard> */}
      {/* <CustomerReview></CustomerReview> */}
      {/* <PaymentPage></PaymentPage> */}
      <AddService></AddService>
    </div>
  );
}

export default App;
