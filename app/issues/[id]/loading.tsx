import { Skeleton } from "@/app/components";
import { Box, Card, Flex } from "@radix-ui/themes";

const LoadingIssueDetailsPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex my="2" className="space-x-3">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailsPage;
