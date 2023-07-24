import { Routes, Route } from "react-router-dom";
import ParticlesBg from "particles-bg";

import NavigationContainer from "./components/navigation/navigation.component";
import Home from "./components/pages/Home.component";
import CalendarPage from "./components/pages/Calendar.component";

const App = () => {
  return (
    <div className="app">
      <ParticlesBg type="circle" color="#33ddff" num={10} bg={true} />
      <NavigationContainer />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/calandar" element={<CalendarPage />} />
      </Routes>
    </div>
  );
};

export default App;
