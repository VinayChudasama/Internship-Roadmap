import {
  Modal,
  Button,
  TextInput,
  Textarea,
  Group,
  Flex,
  Select,
  rem,
} from "@mantine/core";
import { IconPlus, IconChevronDown } from "@tabler/icons-react";
import { addRoadMap, updateRoadmap, getRoadmapById } from "./RoadmapService";
import { useForm } from "@mantine/form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { handleEdit } from "./DropdownMenu";

export default function FormModal() {
  // Created UseState to Open and Close Modal
  const [showModal, setShowModal] = useState(false);

  const form = useForm({
    initialValues: {
      topic: "",
      subtopic: "",
      duration: "",
    },
  });
  function handleFormSubmit(values) {
    addRoadMap(values);
    setShowModal(false);
  }

  return (
    <>
      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title="Add RoadMap Details"
        centered
        style={{ fontWeight: "500" }}
      >
        <form
          className="add-form"
          onSubmit={form.onSubmit((values) => handleFormSubmit(values))}
        >
          <TextInput
            withAsterisk
            label="Topic"
            placeholder="Enter Topic"
            {...form.getInputProps("topic")}
          />
          <Textarea
            mt="md"
            label="SubTopic"
            withAsterisk
            placeholder="Enter Description about topic"
            {...form.getInputProps("subtopic")}
          />

          <Select
            mt="md"
            label="Duration"
            placeholder="Select Duration"
            data={["15m", "30m", "1hr", "1hr 30m"]}
            rightSection={
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
            }
            {...form.getInputProps("duration")}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Add</Button>
          </Group>
        </form>
      </Modal>
      <Flex justify="flex-end" align="center" direction="row">
        <Button
          onClick={() => setShowModal(true)}
          leftSection={<IconPlus size={14} />}
        >
          Add Roadmap Details
        </Button>
      </Flex>
    </>
  );
}
