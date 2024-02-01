import { Menu, Button, rem, UnstyledButton } from "@mantine/core";
import { IconTrash, IconPencil, IconDotsVertical } from "@tabler/icons-react";

import { deleteInternsBatch } from "./InternsBatchService";
// import axios from "axios";

function handleDelete(id) {
  console.log("Delete id :" + id);
  deleteInternsBatch(id).then((res) => {
    console.log(res);
    alert("Rescord has been deleted Successfully !");
  });
}
function handleEdit(id) {
  console.log(id);
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
