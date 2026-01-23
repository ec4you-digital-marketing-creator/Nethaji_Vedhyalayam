import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loading components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const AdmissionsOverview = lazy(() => import('./pages/AdmissionsOverview'));
const Faculty = lazy(() => import('./pages/Faculty'));
const History = lazy(() => import('./pages/History'));
const PrincipalMessage = lazy(() => import('./pages/PrincipalMessage'));
const Nursery = lazy(() => import('./pages/Nursery'));
const Primary = lazy(() => import('./pages/Primary'));
const Curriculum = lazy(() => import('./pages/Curriculum'));
const Facilities = lazy(() => import('./pages/Facilities'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Login = lazy(() => import('./pages/Login'));
const PayFees = lazy(() => import('./pages/PayFees'));
const Career = lazy(() => import('./pages/Career'));
const AdmissionEnquiry = lazy(() => import('./pages/AdmissionEnquiry'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Events = lazy(() => import('./pages/Events'));
const AdminStaff = lazy(() => import('./pages/AdminStaff'));
const ChairmanMessage = lazy(() => import('./pages/ChairmanMessage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
import ProtectedRoute from './components/ProtectedRoute';
import Poster from './components/Poster';

import { API_BASE_URL } from './api/config';

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

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
  const [showPoster, setShowPoster] = useState(false);
  const [posterData, setPosterData] = useState(null);

  useEffect(() => {
    const fetchPoster = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/core/posters/current/`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.id) {
            setPosterData(data);
            setShowPoster(true);
          }
        }
      } catch (error) {
        console.error("Error fetching poster:", error);
      }
    };
    fetchPoster();
  }, []);

  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
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
            <Route path="/about/chairman-message" element={<ChairmanMessage />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/career" element={<Career />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

          </Route>

          {/* Protected Admin Route (No Navbar/Footer) */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={['staff', 'admin']}>
                <AdminStaff />
              </ProtectedRoute>
            }
          />
          <Route path="/poster" element={<Poster />} />
        </Routes>
      </Suspense>
      {showPoster && (
        <div className="fixed inset-0 z-9999 bg-black/5 backdrop-blur-xs overflow-y-auto">
          <Poster data={posterData} onClose={() => setShowPoster(false)} />
        </div>
      )}
    </Router>
  );
}

export default App;
