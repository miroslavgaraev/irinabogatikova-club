import './App.css';
import Navigation from "./navigation/navigation-comp";
import {Route, Routes} from "react-router-dom";
import Main from "./main/main";
import AboutClub from "./aboutClub/aboutClub";
import IrinaBogatikova from "./aboutClub/IrinaBogatikova";
import TeamAndOffice from "./teamAndOffice/teamAndOffice";
import ArtDesign from "./art-design/art-design";
import MiamiPage from "./art-design/miami/miami-page";
import ZhkPage from "./art-design/ZHKMarshal/zhk-marshal";
import Architecture from "./Architecture/architecture";
import Alcove from "./Architecture/ForPhotos/alcove";
import TaunHouses from "./Architecture/ForPhotos/taunhouses";
import SouthButovo from "./Architecture/ForPhotos/southbutovo";
import ForeignHome from "./Architecture/ForPhotos/ForeignHome";
import OpenVillage from "./Architecture/ForPhotos/openvillage";
import CircleHome from "./Architecture/ForPhotos/circleHome";
import Ispania from "./Architecture/ForPhotos/ispania";
import NeonCenter from "./Architecture/ForPhotos/neon-center";
import Mvd from "./Architecture/ForPhotos/mvd";
import SurgicalCenter from "./Architecture/ForPhotos/surgicalcenter";
import Moscowbank from "./Architecture/ForPhotos/moscowbank";
import Moscowbank2 from "./Architecture/ForPhotos/moscowbank2";
import FamilyApartaments from "./design/forPhotos/family-aparts";
import ArNuvoApartaments from "./design/forPhotos/arnuvoapartaments";
import LuxApartaments from "./design/forPhotos/luxapartaments";
import HistoryStyleApartaments from "./design/forPhotos/history-style-apartaments";
import OfficesInOsobnyak from "./design/forPhotos/offices-in-osobnyak";
import FyuszhnApartaments from "./design/forPhotos/fyuzhn-aparts";
import OfficeInStyleArDekoRight from "./design/forPhotos/officeArDekoRight";
import OfficeInStyleArDekoLeft from "./design/forPhotos/officeStyleArDekoLeft";
import Design from "./design/design";
import CarnavalnyaNoch from "./decor/forPhotos/carnavalnya-noch";
import RjayskiySad from "./decor/forPhotos/rayskiy-sad";
import ProvansOnDacha from "./decor/forPhotos/provans-dacha";
import ChristmasMagic from "./decor/forPhotos/christmas-magic";
import AlleyaZvezd from "./decor/forPhotos/alleya-zvezd";
import Scena from "./decor/forPhotos/scena";
import PhotoZone from "./decor/forPhotos/photo-zone";
import Decor from "./decor/decor";
import Anticvariat from "./anticvariat/anticvariat";
import ExclusiveFurniture from "./exclusiveFurniture/exclusiveFurniture";
import ForSmi from "./forSmi/forSmi";
import CompaniesGroup from "./compamiesGroup/compamiesGroup";
import Contacts from "./Contacts/contacts";
import AboutSite from "./about-site/about-site";

function App() {
    window.onload = function () {
        setTimeout(function () {
            document.getElementsByTagName("body")[0].style.visibility = "visible";
        }, 1)};
  return (
    <div className="App opacity">
        <Navigation/>
        <Routes>
            <Route path={'/'} element={<Main/>}></Route>
            <Route path={'/AboutClub'} element={<AboutClub/>}></Route>
            <Route path={'/IrinaBogatikova'} element={<IrinaBogatikova/>}></Route>
            <Route path={'/TeamAndOffice'} element={<TeamAndOffice/>}></Route>
            <Route path={'/ArtDesign'} element={<ArtDesign/>}></Route>
            <Route path={'/Architecture'} element={<Architecture/>}></Route>
            <Route path={'/Design'} element={<Design/>}></Route>
            <Route path={'/Decor'} element={<Decor/>}></Route>
            <Route path={'/Anticvariat'} element={<Anticvariat/>}></Route>
            <Route path={'/ExclusiveFurniture'} element={<ExclusiveFurniture/>}></Route>
            <Route path={'/ForSmi'} element={<ForSmi/>}></Route>
            <Route path={'/CompaniesGroup'} element={<CompaniesGroup/>}></Route>
            <Route path={'/Contacts'} element={<Contacts/>}></Route>
            <Route path={'/AboutSite'} element={<AboutSite/>}></Route>

            {/*Элементы чего либо*/}

            <Route path={'/ArtDesign/ArtMiami'} element={<MiamiPage/>}></Route>
            <Route path={'/ArtDesign/ZHKMarshala'} element={<ZhkPage/>}></Route>


            <Route path={'/Architecture/Alcove'} element={<Alcove/>}></Route>
            <Route path={'/Architecture/TaunHouses'} element={<TaunHouses/>}></Route>
            <Route path={'/Architecture/SouthButovo'} element={<SouthButovo/>}></Route>
            <Route path={'/Architecture/ForeignHome'} element={<ForeignHome/>}></Route>
            <Route path={'/Architecture/OpenVillage'} element={<OpenVillage/>}></Route>
            <Route path={'/Architecture/TaunHouses'} element={<TaunHouses/>}></Route>
            <Route path={'/Architecture/CircleHome'} element={<CircleHome/>}></Route>
            <Route path={'/Architecture/IspaniaHome'} element={<Ispania/>}></Route>
            <Route path={'/Architecture/NeonatalCenter'} element={<NeonCenter/>}></Route>
            <Route path={'/Architecture/MVD'} element={<Mvd/>}></Route>
            <Route path={'/Architecture/SurgicalComplex'} element={<SurgicalCenter/>}></Route>
            <Route path={'/Architecture/MoscowBank'} element={<Moscowbank/>}></Route>
            <Route path={'/Architecture/MoscowBank2'} element={<Moscowbank2/>}></Route>


            <Route path={'/Design/FamilyApartaments'} element={<FamilyApartaments/>}></Route>
            <Route path={'/Design/ApartamentsStyleArNuvo'} element={<ArNuvoApartaments/>}></Route>
            <Route path={'/Design/LuxApartaments'} element={<LuxApartaments/>}></Route>
            <Route path={'/Design/ApartamentsInHistoryStyle'} element={<HistoryStyleApartaments/>}></Route>
            <Route path={'/Design/OfficesInOsobnyak'} element={<OfficesInOsobnyak/>}></Route>
            <Route path={'/Design/FyuzhnApartaments'} element={<FyuszhnApartaments/>}></Route>
            <Route path={'/Design/OfficeInStyleArDekoRight'} element={<OfficeInStyleArDekoRight/>}></Route>
            <Route path={'/Design/OfficeInStyleArDekoLeft'} element={<OfficeInStyleArDekoLeft/>}></Route>


            <Route path={'/Decor/CarnavalNight'} element={<CarnavalnyaNoch/>}></Route>
            <Route path={'/Decor/RjaskiySad'} element={<RjayskiySad/>}></Route>
            <Route path={'/Decor/DachaProvans'} element={<ProvansOnDacha/>}></Route>
            <Route path={'/Decor/ChristmasMagic'} element={<ChristmasMagic/>}></Route>
            <Route path={'/Decor/AlleyStars'} element={<AlleyaZvezd/>}></Route>
            <Route path={'/Decor/Scene'} element={<Scena/>}></Route>
            <Route path={'/Decor/PhotoZone'} element={<PhotoZone/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
