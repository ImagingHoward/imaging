import React, { useContext, useEffect } from "react";
import UserContext from "../../../../hook/auth/user.hook";

const LogoutViewer = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    try {
      localStorage.removeItem("STAINAI_USER_PROFILE");
      localStorage.removeItem("STAINAI_ACCESS_TOKEN");
    } catch (error) {
      console.error("Failed to clear PRBase login state:", error);
    }

    setUser(null);

    // 清除主網站登入狀態後，回到 Analysis Viewer
    window.location.replace(
      "https://stainaiviewer.azurewebsites.net/?logged_out=1"
    );
  }, [setUser]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      Signing out...
    </div>
  );
};

export default LogoutViewer;