import { Skeleton, SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react";

const Loading = ({
  padding = "6",
  boxShadow = "lg",
  bg = "white",
  size = "10",
}) => {
  return (
    <Box padding={padding} boxShadow={boxShadow} bg={bg}>
      <SkeletonCircle size={size} />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
};

export default Loading;
