import { Carousel } from "@mantine/carousel";
import { Flex, Stack, Text, Title } from "@mantine/core";
import { TbBrandFacebookFilled } from "react-icons/tb";
import Image from "next/image";
import React from "react";



const Team = () => {

    return ( <div>
        <Stack>
            <div className="bg-gray-100 mt-36">
                <Flex direction="column" align="center" justify="center">
                    <div className="flex flex-col items-center border-8 border-white rounded-full p-10 relative -top-24 bg-gray-100">
                        <Text fz="lg">CELEBRATING</Text>
                        <Title order={1}>16</Title>
                        <Text fz="lg">YEARS</Text>
                    </div>
                    <div className="mb-5">
                        <Text fz="xl">MEET THE TEAM</Text>
                    </div>
                    <div className="mb-4">
                        <Title order={1}>The Best Chefs</Title>
                    </div>
                    <div className="flex items-center">
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        At natus officia illo asperiores suscipit, culpa omnis ullam commodi, 
                        ipsam voluptas est? Voluptate tempora quia optio nisi. Suscipit ab iure sint!
                        </Text>
                    </div>
                    <div className="my-5">
                        <Carousel
                            height={400}
                            slideSize="33.3333%"
                            slideGap="sm"
                            loop
                            align="start"
                            slidesToScroll={3}
                        >
                           <Carousel.Slide>
                                <div className="relative flex items-center justify-around flex-col">
                                    <div>
                                        <div><TbBrandFacebookFilled /></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <Image src="/chef-img1.png" alt="chefs" width="400" height="400" />
                                    <div className="bg-white text-black p-2 absolute bottom-0 flex flex-col items-center justify-center w-2/3 hover:bg-black hover:text-white">
                                        <Text fw="bold" fz="lg">R. JOHNATAN</Text>
                                        <Text fz="lg">HEAD CHEF</Text>
                                    </div>
                                </div>
                            </Carousel.Slide>
                           <Carousel.Slide>
                                <div className="relative flex items-center flex-col">
                                    <Image src="/chef-img2.png" alt="chefs" width="400" height="400" />
                                    <div className="bg-white text-black p-2 absolute bottom-0 flex flex-col items-center justify-center w-2/3 hover:bg-black hover:text-white">
                                        <Text fw="bold" fz="lg">R. JOHNATAN</Text>
                                        <Text fz="lg">HEAD CHEF</Text>
                                    </div>
                                </div>
                            </Carousel.Slide>
                           <Carousel.Slide>
                                <div className="relative flex items-center flex-col">
                                    <Image src="/chef-img3.png" alt="chefs" width="400" height="400" />
                                    <div className="bg-white text-black p-2 absolute bottom-0 flex flex-col items-center justify-center w-2/3 hover:bg-black hover:text-white">
                                        <Text fw="bold" fz="lg">R. JOHNATAN</Text>
                                        <Text fz="lg">HEAD CHEF</Text>
                                    </div>
                                </div>
                           </Carousel.Slide>
                           <Carousel.Slide>
                                <div className="relative flex items-center flex-col">
                                    <Image src="/chef-img4.png" alt="chefs" width="400" height="400" />
                                    <div className="bg-white text-black p-2 absolute bottom-0 flex flex-col items-center justify-center w-2/3 hover:bg-black hover:text-white">
                                        <Text fw="bold" fz="lg">R. JOHNATAN</Text>
                                        <Text fz="lg">HEAD CHEF</Text>
                                    </div>
                                </div>
                            </Carousel.Slide>
                           <Carousel.Slide>
                                <div className="relative flex items-center flex-col">
                                    <Image src="/chef-img5.png" alt="chefs" width="400" height="400" />
                                    <div className="bg-white text-black p-2 absolute bottom-0 flex flex-col items-center justify-center w-2/3 hover:bg-black hover:text-white">
                                        <Text fw="bold" fz="lg">R. JOHNATAN</Text>
                                        <Text fz="lg">HEAD CHEF</Text>
                                    </div>
                                </div>
                            </Carousel.Slide>
                           <Carousel.Slide>
                                <div className="relative flex items-center flex-col">
                                    <Image src="/chef-img6.png" alt="chefs" width="400" height="400" />
                                    <div className="bg-white text-black p-2 absolute bottom-0 flex flex-col items-center justify-center w-2/3 hover:bg-black hover:text-white">
                                        <Text fw="bold" fz="lg">R. JOHNATAN</Text>
                                        <Text fz="lg">HEAD CHEF</Text>
                                    </div>
                                </div>
                            </Carousel.Slide>
                        </Carousel>
                    </div>
                    <div className="border border-black p-10">
                        <Text>MEET OUR TEAM</Text>
                    </div>
                    <div className="py-10 flex flex-col items-center bg-white my-10">
                        <div className="my-5"><Text>FEATURES</Text></div>
                        <div className="my-5"><Title>Why people choose us?</Title></div>
                        <div className="my-5">
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