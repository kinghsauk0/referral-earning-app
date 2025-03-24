import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Use 'Provider' from 'react-redux'
import HomePage from "./components/HomePage/HomePage";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import AboutTask from "./components/AboutTask/AboutTask";
import TaskPage from "./components/TaskPage/TaskPage";
import store from "./Redux/Store.jsx"; // Keep the default import for 'store'
import ContactUs from "./components/ContactUs/ContactUs";
import WithdrawalHistory from "./components/Withdrawal/WithdrawalHistory";
import { SnackbarProvider } from 'notistack';
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./helper/ProtectedRoute.jsx";

function App() {
  return (
    <AuthProvider>
    <Provider store={store}>

      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>

        {" "}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route  path="/login" element={<LoginPage/>}/>
           <Route element={<ProtectedRoute/>}>
           <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/about-task" element={<AboutTask />} />
            <Route path="/task" element={<TaskPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/withdrawal" element={<WithdrawalHistory />} />{" "}
           </Route>
            {/* Fixed typo */}
          </Routes>
        </Router>
      </SnackbarProvider>
    </Provider>
    </AuthProvider>
  );
}

export default App;
