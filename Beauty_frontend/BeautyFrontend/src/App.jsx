// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HeroSection from './components/HeroSection';
// import Cards from './components/cards';
// import VideoGallery from './components/VideoGallery';
// import VideoDetail from './components/VideoDetail';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import LoginSignupPage from './components/LoginSignupPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Home Page */}
//         <Route path="/" element={
//             <>
//               <Navbar />  
//               <HeroSection />
//               <Cards />
//               <VideoGallery />
//             </>
//           }
//         />


//         <Route path="/video/:id" element={<VideoDetail />} />
//         <Route path="/login" element={<LoginSignupPage />} />
//       </Routes>
//       <Footer />
//     </Router>
    
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Cards from './components/cards';
import VideoGallery from './components/VideoGallery';
import VideoDetail from './components/VideoDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginSignupPage from './components/LoginSignupPage';
import PrivateRoute from './components/PrivateRoute'; // ✅ new import

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page (Public) */}
        <Route path="/login" element={<LoginSignupPage />} />

        {/* Home Page (Protected) */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <HeroSection />
                <Cards />
                <VideoGallery />
                <Footer />
              </>
            </PrivateRoute>
          }
        />

        {/* Video Detail Page (Protected) */}
        <Route
          path="/video/:id"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <VideoDetail />
                <Footer />
              </>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
