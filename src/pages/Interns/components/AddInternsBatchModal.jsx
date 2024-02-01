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
import { IconPlus, IconChevronDown, IconCalendar } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { addInternsBatch } from "./InternsBatchService";
import { DateInput, DatePicker, DatePickerInput } from "@mantine/dates";

export default function FormModal() {
  // Created UseState to Open and Close Modal
  const [showModal, setShowModal] = useState(false);
  const icon = (
    <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );
  const form = useForm({
    initialValues: {
      batchname: "",
      startdate: "",
      enddate: "",
    },
  });
  function handleFormSubmit(values) {
    addInternsBatch(values);
    console.log("Value added :" + values);
    setShowModal(false);
  }

  return (
    <>
      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title="Add Intern's Batch Details"
        centered
        style={{ fontWeight: "500" }}
      >
        <form
          className="add-form"
          onSubmit={form.onSubmit((values) => handleFormSubmit(values))}
        >
          <TextInput
            withAsterisk
            label="Batch Name"
            placeholder="Enter Batch Name"
            {...form.getInputProps("batchname")}
          />

          <DateInput
            mt="md"
            rightSection={icon}
            valueFormat="YYYY MMM DD"
            label="StartDate"
            placeholder="Select Start Date"
            {...form.getInputProps("startdate")}
          />
          <DateInput
            mt="md"
            rightSection={icon}
            valueFormat="YYYY MMM DD"
            label="EndDate"
            placeholder="Select End Date"
            {...form.getInputProps("enddate")}
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
          Add New Batch
        </Button>
      </Flex>
    </>
  );
}
