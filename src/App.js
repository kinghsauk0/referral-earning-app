import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import AboutTask from "./components/AboutTask/AboutTask";
import TaskPage from "./components/TaskPage/TaskPage";
import store from "./Redux/Store.jsx";
import ContactUs from "./components/ContactUs/ContactUs";
import WithdrawalHistory from "./components/Withdrawal/WithdrawalHistory";

function App() {
  return (
    <provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/about-task" element={<AboutTask />} />
          <Route path="/task/:id" element={<TaskPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/withdral" element={<WithdrawalHistory />} />
        </Routes>
      </Router>
    </provider>
  );
}

export default App;
