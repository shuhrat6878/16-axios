import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { MainLayout } from "./layout/main-layout";
import { ProfileLayout } from "./layout/profile-layout";
import { Profile } from "./pages/profile";
import { Auth } from "./pages/auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
