import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import About from './pages/About';
import AdmissionsOverview from './pages/AdmissionsOverview';
// import FeeStructure from './pages/FeeStructure';
import Faculty from './pages/Faculty';
import History from './pages/History';
import PrincipalMessage from './pages/PrincipalMessage';
import Nursery from './pages/Nursery';
import Primary from './pages/Primary';
import Curriculum from './pages/Curriculum';
import Facilities from './pages/Facilities';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import PayFees from './pages/PayFees';
import Career from './pages/Career';
import AdmissionEnquiry from './pages/AdmissionEnquiry';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import AdminStaff from './pages/AdminStaff';
import ProtectedRoute from './components/ProtectedRoute';

// Public Layout Component containing Navbar and Footer
const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Navbar & Footer */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Placeholder routes for other pages */}
          <Route path="/admissions" element={<AdmissionsOverview />} />
          <Route path="/admissions/enquiry" element={<AdmissionEnquiry />} />
          {/* <Route path="/admissions/fees" element={<FeeStructure />} /> */}
          <Route path="/admissions/faculty" element={<Faculty />} />
          <Route path="/academics/nursery" element={<Nursery />} />
          <Route path="/academics/primary" element={<Primary />} />
          <Route path="/academics/curriculum" element={<Curriculum />} />
          <Route path="/academics" element={<div className="p-20 text-center text-2xl">Academics Page (Coming Soon)</div>} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pay-fees" element={<PayFees />} />
          <Route path="/about/principal-message" element={<PrincipalMessage />} />
          <Route path="/about/principal-message" element={<PrincipalMessage />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/career" element={<Career />} />
        </Route>

        {/* Protected Admin Route (No Navbar/Footer) */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={['staff']}>
              <AdminStaff />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
