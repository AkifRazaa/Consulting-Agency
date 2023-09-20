import React from "react";
import { Image, Stack, Heading, Text, Divider, Box } from "@chakra-ui/react";

const cardStyle = {
  borderWidth: "1px",
  borderRadius: "lg",
  overflow: "hidden",
};

function ProjectCard({ image, title, description, date }) {
  return (
    <Box {...cardStyle}>
      <Image
        src={image}
        alt="Green double couch with wooden legs"
        maxH="300px"
        objectFit="cover"
        style={{ width: "100%" }}
      />
      <Box p="4">
        <Stack spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </Box>
      <Divider style={{ border: "1px solid" }} />
      <div className="d-flex justify-content-between align-items-center">
        <Text className="mt-2"> {date} </Text>
        <button type="button" className="btn btn-outline-secondary">
          Read More
        </button>
      </div>
    </Box>
  );
}

export default ProjectCard;
