//import { useClient } from 'next/data-client';
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
//import { MdCheckCircle, MdSettings } from 'react-icons/md';

const Page = () => {
  return (
    <>
      <Box bg="blue.800" color="white" p={4} h='250px' display="flex" alignItems="center">
        <Container maxW="container.lg">
          <Heading as="h1" size="xl">
            Foundational Nutrition
          </Heading>
          <br />
          <Text>For Soldiers to perform optimally throughout their careers in assignments with varying levels of mental
            and physical requirements, they must be proactive and place as much emphasis on foundational health as
            they do on task-specific performance. This entails chronic disease prevention and immune system
            enhancement.</Text>
        </Container>
      </Box>

      <Box bg="white" color="black" p={2} h='300px' display="flex" alignItems="center">
        <Container color="black" maxW="container.lg" border="1px solid black" borderRadius="md" p={4}>
          <Heading color="blue.500" as="h3" size="lg">
            Summary
          </Heading>
          <Text color="blue.500">The Army’s comprehensive performance nutrition program concept and framework encompasses three
            components—proactive, active, and reactive. The proactive component, or foundational nutrition, entails
            chronic disease prevention and immune system enhancement. The active component, or operational
            (occupational and environmental task-specific performance) nutrition, focuses on event fueling and postevent recovery and arduous environment preparedness. The reactive component, or therapeutic nutrition,
            centers on specific nutritional interventions to treat (as opposed to prevent) an illness, injury, or condition.
            When tailored to organizational requirements, unit- and culture-specific nutrition education and services can
            optimize individual Soldier performance, overall unit readiness, and ultimately, mission success. </Text>
        </Container>
      </Box>

      <Box bg="white" color="black" p={2} h='170px' display="flex">
        <Container maxW="container.xl">
          <Heading as='h3' size='lg'>
            Health Promotion and Chronic Disease Prevention
          </Heading>
          <Text>The nutritional foundation established by a Soldier’s usual dietary intake, or “everyday diet,” can
            greatly reduce preventable future disease. More than 60 years of peer-reviewed research has demonstrated
            the importance of the everyday diet to the health and longevity of an individual. Soldiers can capitalize on
            these findings by consuming more whole-grain products, fruits and vegetables, legumes, nuts, seeds, dairy
            products, and fish, and less processed grains, added sugars, and processed meats.</Text>
        </Container>
      </Box>

      <Box bg="white" color="black" p={2} h='520px' display="flex" border="1px solid black" borderRadius="md">
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab fontWeight="bold">Dietary Guidelines For Americans</Tab>
            <Tab fontWeight="bold">A Healthy Eating Pattern</Tab>
            <Tab fontWeight="bold">Key Components of Healthy Eating Patterns</Tab>
            <Tab fontWeight="bold">Other Dietary Components</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <p>
                The United States Department of Health and Human Services (known as HHS) and the United States
                Department of Agriculture (known as USDA) jointly publish the Dietary Guidelines for Americans every 5
                years. The Dietary Guidelines for Americans provides evidence-based food and beverage recommendations
                for Americans ages 2 and older. These recommendations aim to promote health, prevent chronic disease, and
                help people reach and maintain a healthy weight, and should be used to develop the Soldier’s baseline healthy
                eating pattern.
              </p>
              <br />
              <p> An eating pattern represents all foods and beverages consumed. All foods consumed as part of a
                healthful eating pattern unite to meet nutritional needs that promote a healthy weight, enhance performance,
                and prevent chronic disease. Soldiers aim to meet their nutrient needs through healthful eating patterns
                Chapter 8
                8-2 FM 7-22 1 October 2020
                comprised of primarily nutrient-dense (such as essential vitamins and minerals, complex carbohydrates, lean
                protein, and healthy fats) whole foods. A healthy eating pattern includes the following: </p>
              <br />
              <Container maxW="container.lg">
                <UnorderedList>
                  <ListItem>A variety of vegetables from all of the subgroups—dark green, red and orange, legumes (beans
                    and peas), and starchy (potatoes, corn, and winter squash).</ListItem>
                  <ListItem>Fruits, especially whole fruits</ListItem>
                  <ListItem>Grains, at least half of which are whole grains.</ListItem>
                  <ListItem>Fat-free or low-fat (1 percent) diary, including milk, yogurt, cheese, fortified soy beverages, or
                    combination of these.</ListItem>
                  <ListItem>A variety of protein foods, including seafood, lean meats and poultry, eggs, legumes (beans and
                    peas), and nuts, seeds, and soy products.</ListItem>
                  <ListItem>Oils high in polyunsaturated and monounsaturated fats.</ListItem>
                </UnorderedList>
              </Container>
            </TabPanel>
            <TabPanel>
              <p>Managing calorie intake is fundamental to achieving and maintaining calorie balance—
                the balance between the calories taken in from foods and the calories expended from
                metabolic processes and physical activity. A healthy eating pattern limits-- </p>

              <br />
              <Container maxW="container.lg">
                <UnorderedList>
                  <ListItem>Added sugar—consume less than 10 percent calories per day from added sugar</ListItem>
                  <ListItem>Saturated and trans fats—less than 10 percent calories per day from saturated fats.</ListItem>
                  <ListItem>Sodium—consume less than 2300 milligrams per day from sodium.</ListItem>
                </UnorderedList>
              </Container>
            </TabPanel>
            <TabPanel>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Velit aliquet sagittis id consectetur purus ut faucibus. Tincidunt ornare massa eget egestas purus. Vulputate ut pharetra sit amet aliquam id. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Porttitor eget dolor morbi non arcu risus quis. Turpis massa sed elementum tempus egestas sed. Facilisis sed odio morbi quis commodo odio. Nec tincidunt praesent semper feugiat nibh sed. Euismod in pellentesque massa placerat duis. Dictum fusce ut placerat orci nulla. Sed nisi lacus sed viverra tellus. Arcu vitae elementum curabitur vitae nunc sed velit. A arcu cursus vitae congue mauris rhoncus aenean vel elit. </p>
              <br />
              <p> Urna nunc id cursus metus aliquam eleifend. Amet mattis vulputate enim nulla. Dictumst quisque sagittis purus sit amet volutpat consequat. Nec sagittis aliquam malesuada bibendum arcu. Amet venenatis urna cursus eget. Ultricies tristique nulla aliquet enim tortor at auctor urna. Fames ac turpis egestas maecenas pharetra convallis posuere. Velit laoreet id donec ultrices tincidunt. Mauris ultrices eros in cursus. Tortor dignissim convallis aenean et tortor at risus viverra. Orci ac auctor augue mauris augue. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Commodo elit at imperdiet dui accumsan. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Neque viverra justo nec ultrices dui sapien eget mi proin.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Box bg="white" color="black" p={5} h='200px' display="flex" >
        <Container maxW="container.xl">
          <Heading as='h3' size='lg'>
            Body Composition
          </Heading>
          <Text>Following a healthy eating pattern (consuming the number of servings of carbohydrate, protein and
            healthy fats from the food groups to meet individual calorie needs) supports a healthy body composition. The
            frequency, intensity, and type of physical activity also impact body composition. To perform optimally at
            any physical task requires proper nutrition combined with physical training. All Soldiers are encouraged to
            achieve and maintain body composition. See AR 600-9 for standards for body fat.</Text>
        </Container>
      </Box>

      <Box bg="white" color="black" p={2} h='630px' display="flex" border="1px solid black" borderRadius="md">
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab fontWeight="bold">Weight Loss</Tab>
            <Tab fontWeight="bold">Body Mass Index</Tab>
            <Tab fontWeight="bold">Weight Gain</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <p>For some Soldiers, injury, stress, lack of time, frequent travel, or other reasons might contribute to a
                higher-than-optimal weight. They need to determine what might contribute to a body composition higher in
                body fat. It is important to evaluate the amount of food and calorie-containing beverages consumed each day
                and to reduce the total number of calories per day to reduce body fat. It takes dedication to make adjustments
                to eating habits, portion sizes, food choices, physical activity, sleep hygiene, and stress management.
                Nutrition goals should be realistic as weight loss does not happen overnight. Soldiers can generally sustain a
                weight loss of 0.5-1 pound per week. To prevent lean muscle loss and nutrient deficiencies, women should
                consume no less than 1200 calories per day; men should consume no less than 1500 calories per day. </p>

              <br />
              <p> Soldiers use the following tips to achieve a healthy weight: </p>
              <br />
              <Container maxW="container.lg">
                <UnorderedList>
                  <ListItem>Track food intake using a daily food log.</ListItem>
                  <ListItem>Focus on an eating plan that consists of nutrient rich, lean sources of protein—including fish,
                    poultry, beans, nuts, and dairy products—and incorporate whole grains, fruits, and vegetables.</ListItem>
                  <ListItem>Choose low calorie beverages such as water, low-fat milk (or soy milk), and unsweetened
                    beverages with and between meals to stay hydrated.</ListItem>
                  <ListItem> Be mindful of hunger and fullness cues, keeping in mind it takes 20 minutes to feel full, so eating
                    slowly and mindfully is helpful to prevent eating more calories than intended.</ListItem>
                  <ListItem> Keep a food log to stay aware of the number of calories consumed and to know whether the calorie
                    goal is met or not. This supports understanding whether further changes in eating habits are
                    required to support weight loss</ListItem>
                  <ListItem>Stay hydrated and do not starve yourself. There is a balance in caloric consumption and </ListItem>
                </UnorderedList>
              </Container>
              <br />
              <p>Goals change depending on work schedules. For example, trainees who struggle to have enough energy to
                perform the physical components in BCT should not focus on losing weight; their current goal should focus
                on fuel to perform. Once they have passed the physical standards, then they can shift their focus to weight
                loss. </p>
            </TabPanel>
            <TabPanel>
              <p>
                Body mass index (BMI) is a population screening measure commonly used to rapidly assess health
                and classify individuals as underweight, normal, overweight, or obese.
                BMI = weight (in kilograms) / height (in meters) squared = kg/m2
              </p>
              <br />
              <p> Reference standards developed for the United States population by race and gender, so that individuals
                at risk for obesity can be easily identified. However, the reference value for the U.S. population does not
                always apply to special populations, such as Soldiers, who may have a higher BMI but acceptable body
                composition. BMI is a screening tool that just assesses height to weight ratio but does not indicate body
                composition. Leaders may refer their Soldiers to a registered dietitian or the Army Wellness Center for more
                accurate body composition analysis to track progress. AR 600-9 indicates the weight for height ratio
                screening tool for Soldiers. Leaders can use monthly weigh-ins and taping to keep track of changes in a
                Soldiers body composition. However, all Soldiers must adhere to the body fat guidelines outlined in
                AR 600-9 </p>
              <br />
            </TabPanel>
            <TabPanel>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Velit aliquet sagittis id consectetur purus ut faucibus. Tincidunt ornare massa eget egestas purus. Vulputate ut pharetra sit amet aliquam id. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Porttitor eget dolor morbi non arcu risus quis. Turpis massa sed elementum tempus egestas sed. Facilisis sed odio morbi quis commodo odio. Nec tincidunt praesent semper feugiat nibh sed. Euismod in pellentesque massa placerat duis. Dictum fusce ut placerat orci nulla. Sed nisi lacus sed viverra tellus. Arcu vitae elementum curabitur vitae nunc sed velit. A arcu cursus vitae congue mauris rhoncus aenean vel elit. </p>
              <br />
              <p> Urna nunc id cursus metus aliquam eleifend. Amet mattis vulputate enim nulla. Dictumst quisque sagittis purus sit amet volutpat consequat. Nec sagittis aliquam malesuada bibendum arcu. Amet venenatis urna cursus eget. Ultricies tristique nulla aliquet enim tortor at auctor urna. Fames ac turpis egestas maecenas pharetra convallis posuere. Velit laoreet id donec ultrices tincidunt. Mauris ultrices eros in cursus. Tortor dignissim convallis aenean et tortor at risus viverra. Orci ac auctor augue mauris augue. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Commodo elit at imperdiet dui accumsan. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Neque viverra justo nec ultrices dui sapien eget mi proin.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* <Box bg="white" color="black" p={2} h='200px' display="flex">
        <Container maxW="container.lg">
          <UnorderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </Container>
      </Box> */}

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
