import { Route, Routes } from "react-router-dom";
import App from "../App";
import Films from "../pages/Films.Page/FilmsPage";
import Series from "../pages/Series.Page/SeriesPage";
import Obunalar from "../pages/Subscribtions.Page/ObunalarPage";
import ShowsById from "../pages/ShowsById/ShowsById";


function RoutesPage() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/films" element={<Films />} />
            <Route path="/series" element={<Series />} />
            <Route path="/obunalar" element={<Obunalar />} />
            <Route path="/shows/:id" element={<ShowsById />} /> {/* Dynamic route for ShowsById */}
        </Routes>
    );
}

export default RoutesPage;
