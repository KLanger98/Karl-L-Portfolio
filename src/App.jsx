import { MantineProvider, AppShell } from "@mantine/core";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer.jsx"
import { Outlet } from "react-router-dom";

import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <AppShell>
        <AppShell.Header>
          <Navbar />
        </AppShell.Header>
        <AppShell.Main style={{ background: "#e9f5db" }}>
          <Outlet />
          <Home />
        </AppShell.Main>
        <AppShell.Footer style={{position: "static"}}>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
