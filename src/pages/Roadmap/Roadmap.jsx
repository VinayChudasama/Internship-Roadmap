// import Tables from "./components/table";
import { RoadMapTables } from "./components/RoadmapTable";
import FormModal from "./components/AddRoadmapModal";
import { Breadcrumbs, Anchor, Flex } from "@mantine/core";

const items = [
  { title: "Internship", href: "#" },
  { title: "Roadmap", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));
function Roadmap() {
  return (
    <div className="content-wrapper">
      <Flex justify="space-between" align="center" className="sub-header">
        <div>
          <Breadcrumbs>{items}</Breadcrumbs>
          <h4 className="content-title">Roadmap</h4>
        </div>
        <FormModal />
      </Flex>
      <RoadMapTables />
    </div>
  );
}

export default Roadmap;
