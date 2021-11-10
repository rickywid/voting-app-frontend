import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Poll from "./components/poll";
import NewPoll from "./components/new";
import Signup from "./components/signup";
import Login from "./components/login";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/poll/:id" element={<Poll />} />
    <Route path="/new" element={<NewPoll />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default routes;
