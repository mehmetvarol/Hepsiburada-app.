import { createContext, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Add from "./companents/ADD/Add";
import Content from "./companents/Content";
import Header from "./companents/Header";

export const MyContext = createContext("");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);

function App() {
  const dataList = [
    { linkName: "Hacker News", linkUrl: "www.hackernews.com", points: 6 },
    { linkName: "Google", linkUrl: "www.google.com", points: 3 },
  ];
  
  const [linkData, setLinkData] = useState(dataList);

  return (
    <MyContext.Provider value={{ linkData, setLinkData }}>
      <div className="App">
        <Header />
        <hr />
        <RouterProvider router={router} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
