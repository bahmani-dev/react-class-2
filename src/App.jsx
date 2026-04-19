import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { About } from "./screens/About";

import { MainLayout } from "./layout/MainLayout";
import { Summary } from "./screens/Summary";
import { Profile } from "./screens/Profile";
import { NotFound } from "./screens/NotFound";
import ThemeProvider from "./context/ThemeProvider";
import Menu from "./screens/Menu";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<MainLayout />}>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="summary" element={<Summary />}></Route>
          </Route>
          <Route path="/home" element={<Navigate to="/" />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
