import { useEffect } from "react";  // uses the React hook "useEffect"

function Logger() {
  useEffect(() => {
    console.log("Component has been rendered! ✔️");
  }, []);

  return <h1 style={{color: "skyblue", fontSize:"28px", fontFamily: "cursive"}}>🤓 Check your console!</h1>;
}

export default Logger;