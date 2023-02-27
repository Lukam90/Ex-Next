import { Box, Button, Center, Heading, HStack, Image, Tag, Text } from '@chakra-ui/react'

const tags = ["Waterfall", "Nature"]

export default function ExCard() {
	return (
		<Center as="section" bg="gray.100" h="100vh">
			<Box maxW="420px" bg="white" p="6">
                <Image
                    src="https://picsum.photos/400"
                    alt="A random image"
                    borderRadius="xl"
                    objectFit="cover"
                    mx="auto"
                />

                <HStack mt="5" spacing="3">
                    {tags.map(item => (
                        <Tag key={item} variant="outline">{item}</Tag>
                    ))}
                </HStack>

                <Heading my="4" size="lg">A random image</Heading>

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
