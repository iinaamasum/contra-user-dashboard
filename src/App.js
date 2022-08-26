import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import UserDashboard from './Components/UserDashboard/UserDashboard';

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserDashboard />} />
      </Routes>
    </section>
  );
}

export default App;
