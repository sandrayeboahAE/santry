import { Flex, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

const Team = () => {
    return ( <div>
        <Stack>
            <div className="bg-gray-200">
                <Flex direction="column" align="center" justify="center">
                    <div className="flex flex-col items-center border-8 border-white rounded-full p-10">
                        <Text fz="lg">CELEBRATING</Text>
                        <Title order={1}>16</Title>
                        <Text fz="lg">YEARS</Text>
                    </div>
                    <div>
                        <Text>MEET THE TEAM</Text>
                    </div>
                    <div>
                        <Title>The Best Chefs</Title>
                    </div>
                    <div>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        At natus officia illo asperiores suscipit, culpa omnis ullam commodi, 
                        ipsam voluptas est? Voluptate tempora quia optio nisi. Suscipit ab iure sint!
                        </Text>
                    </div>
                    <div>
                        <Flex>
                            <div>
                                <Image src="/chef-img2.png" alt="chefs" width="300" height="300" />
                            </div>
                            <div>
                                <Image src="/chef-img4.png" alt="chefs" width="300" height="300" />
                            </div>
                            <div>
                                <Image src="/chef-img2.png" alt="chefs" width="300" height="300" />
                            </div>
                            <div>
                                <Image src="/chef-img4.png" alt="chefs" width="300" height="300" />
                             </div>
                        </Flex>
                    </div>
                    <div className="border border-black p-4">
                        <Text>MEET OUR TEAM</Text>
                    </div>
                    <div>
                        <div><Text>FEATURES</Text></div>
                        <div><Title>Why people choose us?</Title></div>
                        <div>
                            <Flex>
                                <div className="flex flex-col items-center gap-2 m-4">
                                    <Image src="/chef-feature3.svg" alt="feature" width="100" height="100" />
                                    <Title>Menu for every taste</Title>
                                    <Text>Dolor sit amet, consectetur adipisicing elit et molestias possimus</Text>
                                </div>
                                <div className="flex flex-col items-center gap-2 m-4">
                                    <Image src="/chef-feature2.svg" alt="feature" width="100" height="100" />
                                    <Title>Always fresh ingredients</Title>
                                    <Text>Assumenda possimus eaque illo iste, autem. Porro eveniet autem</Text>
                                </div>
                                <div className="flex flex-col items-center gap-2 m-4">
                                    <Image src="/chef-feature1.svg" alt="feature" width="100" height="100" />
                                    <Title>Experienced chefs</Title>
                                    <Text>Dolor sit amet, consectetur adipisicing elit et molestias possimus</Text>
                                </div>
                            </Flex>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-black text-white p-10">
                        <Title>
                            Our dishes originate from traditional French cuisine. For inspiration, we look to the
                            seasons and to the natural relationships between our ingredients.
                        </Title>
                        <div className="m-5 border border-dashed border-white h-36 w-36 rounded-full flex items-center justify-center">
                            <Text>WATCH VIDEO</Text>
                        </div>
                    </div>
                </Flex>
            </div>
            <Flex></Flex>
        </Stack>
    </div> );
}
 
export default Team;