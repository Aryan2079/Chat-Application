import Home from "./assets/pages/Home";
import ProfileSwitchContextProvider from "./assets/context/profileSwitchContext";

function App() {
  return (
    <>
      <ProfileSwitchContextProvider>
        <Home />
      </ProfileSwitchContextProvider>
      {/* <Profile /> */}
      {/* create higher order components for restricted routes */}

      {/* create a context for the profile and AllMessages components to switch between them */}
    </>
  );
}

export default App;
