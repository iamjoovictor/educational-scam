import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Simulations from './pages/Simulations';
import FakePurchase from './pages/FakePurchase';
import FakeEmail from './pages/FakeEmail';
import FakePayment from './pages/FakePayment';
import Tips from './pages/Tips';
import UsersTable from './pages/UsersTable';
import LogsTable from './pages/LogsTable';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quiz from './pages/Quiz';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/simulations" element={<Simulations />} />
          <Route path="/simulations/purchase" element={<FakePurchase />} />
          <Route path="/simulations/email" element={<FakeEmail />} />
          <Route path="/simulations/payment" element={<FakePayment/>} />
          <Route path="/tips/:type" element={<Tips />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/users" element={<UsersTable />} />
          <Route path="/logs" element={<LogsTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;