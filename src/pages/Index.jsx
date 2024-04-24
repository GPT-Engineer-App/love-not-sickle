import { Box, Button, Container, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";
import { FaHeart, FaInfoCircle, FaDonate } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={4} as="h1" size="xl" textAlign="center">
            Share Love, Not Sickle Cell
          </Heading>
          <Text fontSize="lg" textAlign="justify">
            Sickle cell disease affects millions of people worldwide. It is a genetic disorder that causes red blood cells to have a sickle shape, which can block blood flow causing pain and infections. Our campaign, "Share Love, Not Sickle Cell," aims to spread awareness and foster a supportive community for those affected. By educating the public and encouraging genetic testing, we can reduce the incidence of sickle cell disease and support those living with it.
          </Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={4} as="h2" size="lg" textAlign="center">
            How You Can Help
          </Heading>
          <VStack spacing={4}>
            <Button leftIcon={<FaHeart />} colorScheme="pink" variant="solid">
              Educate Yourself and Others
            </Button>
            <Button leftIcon={<FaInfoCircle />} colorScheme="teal" variant="outline">
              Promote and Attend Events
            </Button>
            <Button leftIcon={<FaDonate />} colorScheme="green" variant="ghost">
              Make a Donation
            </Button>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" textAlign="center">
          <Image src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRpdmVyc2UlMjBncm91cHxlbnwwfHx8fDE3MTM5NzM2NzB8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" mb={4} />
          <Text fontSize="md">Join us in our mission to combat sickle cell disease. Together, we can make a difference in the lives of those affected. Share your love and support, not sickle cell.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" textAlign="center">
          <Link href="https://www.health.gov.ng" isExternal color="blue.500">
            Learn more at the Federal Ministry of Health <FaInfoCircle />
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
