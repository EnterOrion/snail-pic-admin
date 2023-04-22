import "./App.css";
import { useState, useEffect } from "react";
import Login from "./Login";
import UploadForm from "./UploadForm";

function App() {
  const [userAuth, setUserAuth] = useState(false);

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
