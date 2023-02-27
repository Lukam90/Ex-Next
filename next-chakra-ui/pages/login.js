import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Login() {
    const { toggleColorMode } = useColorMode()

    const formBackground = useColorModeValue("gray.100", "gray.700")

	return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={formBackground} p={12} rounded={6}>
                <Heading mb={6}>Log in</Heading>

                <Input type="email" placeholder="lazar@chakra-ui.com" variant="filled" mb={3} />
                <Input type="password" placeholder="xxxxyyyy" variant="filled" mb={3} />

                <Button colorScheme="teal" mb={6}>Log in</Button>
                <Button onClick={toggleColorMode}>Toggle Color</Button>
            </Flex>
        </Flex>
    )
}