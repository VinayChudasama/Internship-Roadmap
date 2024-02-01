import React from "react";
import { Breadcrumbs, Anchor, Flex } from "@mantine/core";
import InternsBatchTable from "./components/InternsBatchTable";
import FormModal from "./components/AddInternsBatchModal";

const items = [{ title: "Internship", href: "#" }, { title: "Interns" }].map(
  (item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  )
);
function Interns() {
  return (
    <div className="content-wrapper">
      <Flex justify="space-between" align="center" className="sub-header">
        <div>
          <Breadcrumbs>{items}</Breadcrumbs>
          <h4 className="content-title">Interns</h4>
        </div>
        <FormModal />
      </Flex>
      <InternsBatchTable />
    </div>
  );
}

export default Interns;
