import "./App.css";
import { useState, useEffect } from "react";
import Login from "./Login";
import UploadForm from "./UploadForm";

function App() {
  const [userAuth, setUserAuth] = useState(false);

  // Checks userAuth to render login component or upload form component
  useEffect(() => {
    const user = localStorage.getItem("userAuth");
    if (user) {
      setUserAuth(true);
    } else {
      setUserAuth(false);
    }
  }, []);

  return (
    <>
      {!userAuth && <Login setUserAuth={setUserAuth} />}
      {userAuth && <UploadForm setUserAuth={setUserAuth} />}
    </>
  );
}

export default App;
