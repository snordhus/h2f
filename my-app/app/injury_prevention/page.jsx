import { useClient } from 'next/data-client';
import React from 'react'
import { ChakraProvider, Box, Heading, Text, VStack, Container, Flex } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { MdCheckCircle, MdSettings } from 'react-icons/md';

const Page = () => {
  return (
    <>
      <Box bg="blue.800" color="white" p={4} h='250px' display="flex" alignItems="center">
        <Container maxW="container.lg">
          <Heading as="h1" size="xl">
            Injury Prevention
          </Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
        </Container>
      </Box>

      <Box bg="white" color="black" p={2} h='250px' display="flex" alignItems="center">
        <Container maxW="container.lg" border="1px solid black" borderRadius="md" p={4}>
          <Heading as="h3" size="lg">
            Summary
          </Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
        </Container>
      </Box>

      <Box bg="white" color="black" p={2} h='300px' display="flex">
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab>Subheading 1</Tab>
            <Tab>Subheading 2</Tab>
            <Tab>Subheading 3</Tab>
            <Tab>Subheading 4</Tab>
            <Tab>Subheading 5</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Non enim praesent elementum facilisis leo. Lacinia quis vel eros donec ac odio tempor orci dapibus. Diam ut venenatis tellus in metus vulputate. Risus nullam eget felis eget nunc lobortis mattis aliquam. Posuere morbi leo urna molestie at elementum. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Enim nulla aliquet porttitor lacus luctus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Morbi tristique senectus et netus et malesuada fames ac turpis. Tellus cras adipiscing enim eu turpis egestas. In aliquam sem fringilla ut.


              </p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Box bg="white" color="black" p={2} h='170px' display="flex">
        <Container maxW="container.xl">
          <Heading as='h3' size='lg'>
            Heading 2
          </Heading>
          <Text>Commodo viverra maecenas accumsan lacus. Gravida arcu ac tortor dignissim convallis aenean. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Tellus molestie nunc non blandit massa enim nec dui nunc. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Augue eget arcu dictum varius duis. Sodales ut etiam sit amet nisl purus. Mauris pellentesque pulvinar pellentesque habitant. Fames ac turpis egestas maecenas pharetra convallis posuere. Amet tellus cras adipiscing enim eu turpis. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Erat pellentesque adipiscing commodo elit at imperdiet.</Text>
        </Container>
      </Box>

      <Box bg="white" color="black" p={2} h='200px' display="flex">
        <Container maxW="container.lg">
          <UnorderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </Container>
      </Box>

      <Box bg="blue.800" color="white" p={4} mt={8}>
        <Container maxW="container.lg">
          <Text fontSize="sm" textAlign="center">
            © 2023 National Guard. An official website of the United States government.
          </Text>
        </Container>
      </Box>
    </>

  )
}

export default Page
