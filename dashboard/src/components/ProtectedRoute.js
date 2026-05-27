const LOGIN_URL = process.env.REACT_APP_LOGIN_URL || "http://localhost:3000/signup";

const decodeJwtPayload = (token) => {
  try {
    const payload = token.split(".")[1];
    const normalizedPayload = payload.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(window.atob(normalizedPayload));
  } catch (error) {
    return null;
  }
};

const getValidToken = () => {
  const params = new URLSearchParams(window.location.search);
  const urlToken = params.get("token");

  if (urlToken) {
    localStorage.setItem("token", urlToken);
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  const token = urlToken || localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const decoded = decodeJwtPayload(token);

  if (!decoded?.exp || decoded.exp * 1000 <= Date.now()) {
    localStorage.removeItem("token");
    return null;
  }

  return token;
};

const ProtectedRoute = ({ children }) => {
  if (!getValidToken()) {
    window.location.replace(LOGIN_URL);
    return null;
  }

  return children;
};

export default ProtectedRoute;
