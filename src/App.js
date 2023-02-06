import { Route, Routes } from "react-router-dom";

import AllMeetupPage from "./pages/AllMettups";
import NewMeetupPage from "./pages/NewMeetups";
import FavouritePage from "./pages/Favourites";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupPage />}></Route>
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favourites" element={<FavouritePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
