import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import { StyledChart } from "./components/chart";
import Routes from "./routes";


function App() {
  return (
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider>
            <ScrollToTop />
            <StyledChart />
            <Routes />
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
  );
}

export default App;
