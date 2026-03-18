import { useEffect } from "react";

export default function LogoutSync() {
  useEffect(() => {
    try {
      localStorage.removeItem("STAINAI_USER_PROFILE");
      localStorage.removeItem("STAINAI_ACCESS_TOKEN");
    } catch (e) {}

    window.parent?.postMessage({ type: "STAINAI_LOGOUT_SYNC_DONE" }, "*");
  }, []);

  return null;
}