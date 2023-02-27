import { Box, Button, Center, Heading, HStack, Image, Tag, Text } from '@chakra-ui/react'

const tags = ["Waterfall", "Nature"]

export default function ExCard() {
	return (
		<Center as="section" bg="gray.100" h="100vh">
			<Box maxW="420px" bg="white" p="6">
                <Image
                    src="https://images.unsplash.com/photo-1541527646982-152300da848d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
                    alt="Svartifoss Waterfall"
                    borderRadius="xl"
                    objectFit="cover"
                    mx="auto"
                />

                <HStack mt="5" spacing="3">
                    {tags.map(item => (
                        <Tag key={item} variant="outline">{item}</Tag>
                    ))}
                </HStack>

                <Heading my="4" size="lg">Svartifoss Waterfall</Heading>

                <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptates quis laborum unde, quae doloremque id minima quisquam facere quod obcaecati ut quidem rerum culpa, fugit sapiente dicta assumenda optio illo molestias, ullam cum libero quasi. A dolorem qui neque esse ipsam vero adipisci. Minus minima vero laboriosam ducimus molestiae!
                </Text>

                <Center my="6">
                    <Button colorScheme="blue">Learn more</Button>
                </Center>
            </Box>
		</Center>
	)
}
