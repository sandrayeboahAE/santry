import { Flex, Tabs, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

const Menu = () => {
    return ( <div className="m-10">
        <Flex direction="row" justify="center" gap="md">
            <div className="w-1/2">
                <Flex direction="column" align="start" >
                    <div className="m-5"><Text fz="lg">WHAT IS ON THE TABLE</Text></div>
                    <div className="m-5"><Title order={1}>The Menu</Title></div>
                    <div className="m-5">
                        <Text fz="md">
                           Sed luctus massa purus, sed dapibus ex condimentum 
                           sed. Vestibulum eget imperdiet metus, varius facilisis nisl. 
                           Integer et sem eros. Pellentesque ullamcorper imperdiet laoreet. 
                           Orci varius natoque penatibus et magnis dis parturient montes, nascetur 
                           ridiculus mus.
                        </Text>
                    </div>
                    <div className="m-5">
                        <Image src="/menu-post1.png" alt="menu" width="700" height="700" />
                    </div>
                </Flex>
            </div>
            <div className="w-1/2">
                <Tabs color="gray" radius="xs" defaultValue="STARTERS">
                    <Tabs.List justify="space-between">
                        <Tabs.Tab value="STARTERS">STARTERS</Tabs.Tab>
                        <Tabs.Tab value="CHINESE">CHINESE</Tabs.Tab>
                        <Tabs.Tab value="PIZZA">PIZZA</Tabs.Tab>
                        <Tabs.Tab value="DESSERT">DESSERT</Tabs.Tab>
                        <Tabs.Tab value="DRINK">DRINK</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="STARTERS" className="my-10">
                        <Flex direction="column" gap="xl">
                            <div className="my-6">
                               <Title order={4}>CAPRICCIOSA........................................................................................................................$30</Title>
                               <Text>Sed luctus massa purus, sed dapibus ex condimentum sed. Vestibulum eget imperdiet metus, varius facilisis nisl. Integer et sem eros.</Text>
                            </div>
                            <div className="my-6">
                                <Title order={4}>MARGHERITA........................................................................................................................$30</Title>
                               <Text>Sed luctus massa purus, sed dapibus ex condimentum sed. Vestibulum eget imperdiet metus, varius facilisis nisl. Integer et sem eros.</Text>
                            </div>
                            <div className="my-6">
                                <Title order={4}>VEGETARIANA........................................................................................................................$30</Title>
                               <Text>Sed luctus massa purus, sed dapibus ex condimentum sed. Vestibulum eget imperdiet metus, varius facilisis nisl. Integer et sem eros.</Text>
                            </div>
                            <div className="my-6">
                                <Title order={4}>GARLIC LIME........................................................................................................................$30</Title>
                               <Text>Sed luctus massa purus, sed dapibus ex condimentum sed. Vestibulum eget imperdiet metus, varius facilisis nisl. Integer et sem eros.</Text>
                            </div>
                            <div className="my-6">
                                <Title order={4}>CAPRICCIOSA........................................................................................................................$30</Title>
                               <Text>Sed luctus massa purus, sed dapibus ex condimentum sed. Vestibulum eget imperdiet metus, varius facilisis nisl. Integer et sem eros.</Text>
                            </div>
                        </Flex>
                    </Tabs.Panel>
                    <Tabs.Panel value="CHINESE">H</Tabs.Panel>
                    <Tabs.Panel value="PIZZA">H</Tabs.Panel>
                    <Tabs.Panel value="DESSERT">H</Tabs.Panel>
                    <Tabs.Panel value="DRINK">H</Tabs.Panel>
                </Tabs>
            </div>
        </Flex>
    </div> );
}
 
export default Menu;