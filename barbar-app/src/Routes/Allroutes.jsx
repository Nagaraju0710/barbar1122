import { Routes,Route} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import MensPage from "../Pages/MensPage"
import KidsPage from "../Pages/KidsPage"
import ColourPage from "../Pages/Colours"
import ReviewsPage from "../Pages/ReviesPage"
import BeardPage from "../Pages/BeardPage"



const AllRoutes=()=>{
    return(
<Routes>
<Route path="/" element={<HomePage/>}></Route>
<Route path="/mens" element={<MensPage/>}></Route>
<Route path="/kids" element={<KidsPage/>}></Route>
<Route path="/colour" element={<ColourPage/>}></Route>
<Route path="/beard" element={<BeardPage/>}></Route>
<Route path="/reviewspage" element={<ReviewsPage/>}></Route>
</Routes>
    )
}
export default AllRoutes