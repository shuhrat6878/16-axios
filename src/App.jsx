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
        <Route path="/" element={<Auth />} />
        <Route path="box" element={<MainLayout />}>
          <Route index element={<Home />} />
          
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Not faund</h1>}/>
      </Routes>
    </>
  );
}

export default App;
