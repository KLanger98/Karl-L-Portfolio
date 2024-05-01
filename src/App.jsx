import { MantineProvider, AppShell } from "@mantine/core";
import Home from "./components/Home"
import Navbar from "./components/Navbar"

import "@mantine/core/styles.css";


function App() {
  return (
    <MantineProvider>
      <AppShell style={{ background: "#e9f5db" }}>
        <AppShell.Header>
          <Navbar/>
        </AppShell.Header>
        <AppShell.Main>
          <Home />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
