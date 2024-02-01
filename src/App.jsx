import { Flex } from "@mantine/core";
import Roadmap from "./pages/Roadmap/roadmap";
import { Sidebar } from "./shared/common-components/Sidebar";
import Header from "./shared/common-components/Header";
import Routing from "./App.Routing";

function App() {
  return (
    <Flex className="main-wrapper">
      <Sidebar />
      <Flex style={{ width: "100%" }} direction="column">
        <Header />
        <Routing></Routing>
      </Flex>
    </Flex>
  );
}

export default App;
