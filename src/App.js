import { BrowserRouter, Route, Routes } from "react-router-dom";
// Start Component
import Home from "./components/Home";
import CaVideosList from "./components/fun/cartoon_videos";
import "./App.css";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import FunList from "./components/fun/FunList";
import MuVideosList from "./components/fun/music_videos";
import GamesList from "./components/games/GamesList";
import LikedVideos from "./components/LikedVideos";
import Profile from "./components/Profile";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import EducationList from "./components/education/EducationList";
import WatchVideo  from "./components/WatchVideo";
import Footer from "./components/Footer";
import CartoonPage from "./components/fun/cartoon_videos/cartoonPage";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/edu" element={<EducationList />}></Route>
        <Route path="/fun" element={<FunList />}></Route>
        <Route path="/cartoon" element={<CaVideosList />}></Route>
        <Route path="/music" element={<MuVideosList />}></Route>
        <Route path="/watch/:id" element={<WatchVideo/>}></Route>
        <Route path="/cartoon/page/:name" element={<CartoonPage/>}></Route>
        <Route path="/games" element={<GamesList />}></Route>
        <Route path="/liked" element={<LikedVideos />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
