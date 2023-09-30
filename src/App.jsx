import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Challenge from "./pages/Challenge";

const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/challenge", element: <Challenge /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
