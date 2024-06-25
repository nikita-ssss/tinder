// import Lorem from "./components/Lorem/Lorem";
import Navbar from "./components/Navbar/Navbar";
// import AddPhotos from "./components/AddPhotos/AddPhotos";
// import RegPage from "./components/RegPage/RegPage";
import StartPage from "./components/StartPage/StartPage";

export default function App() {
    const openedCount = 0;
    const displayNavbar = openedCount === 0 ? false : true;

    return (
        <>
            <div className="background">
                <div className="background__wrapper">
                    <StartPage />
                    {/* <Lorem /> */}
                    {/* <RegPage /> */}
                    {/* <AddPhotos /> */}
                </div>
            </div>
            {displayNavbar && <Navbar />}
        </>
    );
}
