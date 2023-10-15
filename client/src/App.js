import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ApolloProvider is a special type of React component that we'll use to provide data to all of the other components.
// ApolloClient is a constructor function that will help initialize the connection to the GraphQL API server.
// InMemoryCache enables the Apollo Client instance to cache API response data so that we can perform requests more efficiently.
// createHttpLink allows us to control how the Apollo Client makes a request. Think of it like middleware for the outbound network requests.
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import Loading from "./components/Loading";
import ThemeContext from "./components/ThemeContext";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./components/Contact";
import Terms from "./components/Modal/Terms";
import Privacy from "./components/Modal/Privacy";

const httpLink = createHttpLink({
  // uri: "http://localhost:3001/graphql",
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    setInterval(checkLoad, 1000);
  }, [loading]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function checkLoad() {
    if (document.getElementsByTagName("body")[0] === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeContext.Provider value={{ open, setOpen }}>
          {loading === false ? (
            <div>
              {/* TODO pass theme as props to continue using dark mode throughout site */}
              {/* use localStorage for remembering dark mode upon return */}
              {/* <button onClick={handleTheme}>Theme</button> */}
              <Header
                screenWidth={screenWidth}
                breakpoint={breakpoint}
              ></Header>

              <Routes>
                <Route
                  path="/sparks"
                  element={
                    <Landing
                      screenWidth={screenWidth}
                      breakpoint={breakpoint}
                    />
                  }
                />
                <Route
                  screenWidth={screenWidth}
                  path="/about"
                  element={<About />}
                />
                {/* This is for the desktop version flame selector general page */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:tag" element={<Blog />} />
                <Route path="/donate" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>Oops! No content here!</h1>} />
              </Routes>

              <footer className="row justify-content-center text-center">
                <p className="footer col-12">© 2023 Kindling by J. </p>
              </footer>
            </div>
          ) : (
            <Loading></Loading>
          )}
        </ThemeContext.Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
