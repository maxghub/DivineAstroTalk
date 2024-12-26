import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Header from './Header/Header.js'; // Your header component
import AstrologersList from './AtrologerData/AstrologersList'; // Import AstrologersList component
// Assuming you have a Home component

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
       
        <Route path="/astrologers" element={<AstrologersList />} /> {/* Define Astrologers route */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
