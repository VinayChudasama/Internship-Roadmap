import { Menu, Button, rem, UnstyledButton } from "@mantine/core";
import { IconTrash, IconPencil, IconDotsVertical } from "@tabler/icons-react";
import { deleteRoadMap } from "./RoadmapService";

import { useEffect } from "react";
import axios from "axios";
// import axios from "axios";

function handleDelete(id) {
  console.log("Delete id :" + id);
  deleteRoadMap(id).then((res) => {
    console.log(res);
    alert("Record has been deleted Successfully !");
  });
}
function handleEdit(id) {
  console.log("In handleEdit:" + id);
  props.handleEdit(id);
}

export function DropdownMenu({ id }) {
  return (
    <Menu shadow="md" position="bottom-end" width={200}>
      <Menu.Target>
        <UnstyledButton>
          <IconDotsVertical
            style={{ width: rem(18), height: rem(18) }}
          ></IconDotsVertical>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          onClick={(e) => handleEdit(id)}
          leftSection={
            <IconPencil style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Edit
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={
            <IconTrash style={{ width: rem(14), height: rem(14) }} />
          }
          onClick={(e) => handleDelete(id)}
        >
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
