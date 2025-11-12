"use client";

import React, { useState } from "react";
import {
  Box,
  TextInput,
  Textarea,
  Select,
  Button,
  Group,
  Container,
  Grid,
  NumberInput,
} from "@mantine/core";
import TitleHeader from "../common/TitleHeader";

type FormData = {
  name: string;
  email: string;
  enquiryFor: string;
  phone: number | string;
  message: string;
};

const EnquiryForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    enquiryFor: "Order",
    phone: "",
    message: "",
  });

  const handleChange = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((s) => ({ ...s, [key]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("enquiry submitted:", form);
    setForm({
      name: "",
      email: "",
      enquiryFor: "Order",
      message: "",
      phone: " ",
    });
  };

  return (
    <Box p={{base:30,md:50}}>
      <TitleHeader
        title="Enquiry Form"
        description="Have questions or need assistance? Fill out the form below to get in touch with our support team."
      />
      <form onSubmit={onSubmit}>
        <Grid mt="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              label="Name"
              placeholder="Your full name"
              value={form.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("name", e.currentTarget.value)
              }
              required
              mb={12}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              label="Email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("email", e.currentTarget.value)
              }
              required
              mb={12}
              type="email"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Select
              label="Enquiry for"
              data={["Order", "Product", "Returns", "Other"]}
              value={form.enquiryFor}
              onChange={(v) => handleChange("enquiryFor", v ?? "Other")}
              mb={12}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <NumberInput
              label="Phone Number"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={(v) => handleChange("phone", v ?? "")}
              mb={12}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12 }}>
            <Textarea
              label="Message"
              placeholder="Tell us more about your enquiry"
              value={form.message}
              rows={4}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleChange("message", e.currentTarget.value)
              }
              required
              minRows={4}
              mb={16}
            />
          </Grid.Col>
        </Grid>
        <Group justify="flex-end" my="md" mb="xl">
          <Button type="submit" color="black" w="100%">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default EnquiryForm;
