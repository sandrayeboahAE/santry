import { Flex, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

const About = () => {
    return ( <div className="m-10">
        <Stack>
            <Flex direction="row" >
                <div>
                    <div className="m-5"><Text fz="lg">OUR HISTORY</Text></div>
                    <div className="m-5">
                        <Title order={1}>Welcome to </Title>
                        <Title order={1}>Foholic Restaurant</Title>
                    </div>
                    <div className="m-5">
                        <Flex direction="column" gap="lg">
                            <div>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Ipsa, dicta obcaecati vel temporibus vitae distinctio! Reiciendis 
                                    culpa repellat debitis aperiam perferendis quam, in similique dolorum 
                                    qui adipisci cumque itaque repellendus? Voluptates ab autem dolorem 
                                    placeat non, facilis eaque tempora numquam.
                                </Text>
                            </div>
                            <div>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Ipsa, dicta obcaecati vel temporibus vitae distinctio! Reiciendis 
                                    culpa repellat debitis aperiam perferendis quam, in similique dolorum 
                                    qui adipisci cumque itaque repellendus? Voluptates ab autem dolorem 
                                    placeat non, facilis eaque tempora numquam.
                                </Text>
                            </div>
                        </Flex>
                    </div>
                    <div className="m-5">
                        <Image src="/about-img2.png" alt="about image" width="500" height="500" />
                    </div>
                </div>
                <div className="m-5">
                    <div>
                        <Image src="/about-img1.png" alt="about image" width="1500" height="1500" />
                    </div>
                    <div className="m-5">
                        <Title order={1}>Our tasting menu presents a seasonal selection from our trusted farmers, foragers and hunters.</Title>
                    </div>
                </div>
            </Flex>
            <div className="w-full">
            <Flex direction="column">
                    <div className="m-5">
                        <Flex direction="column" align="center" gap="md">
                           <Title order={1}>Celebrating the season of food for the whole </Title>
                           <Title order={1}>year. Enjoy the taste that differs.</Title>
                        </Flex>
                    </div>
                    <div className="w-full">
                        <Flex direction="row" align="center" gap="lg" justify="center">
                            <div className="w-1/3">
                                <div className="static">
                                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit inventore 
                                    delectus dolorem quaerat, ipsa saepe, voluptas minima temporibus illo vitae 
                                    similique dolorum non dicta beatae deleniti. Iure, molestiae numquam?
                                    </Text>
                                </div>
                            </div>
                            <div className="w-2/3">
                                <div className="relative">
                                    <div className="static" >
                                      <Image src="/about-img3.png" alt="about image" width="800" height="800" /> 
                                    </div>
                                    <div className="absolute -bottom-20 -left-56">
                                      <Image src="/about-img4.png" alt="about image" width="300" height="300" />
                                    </div>
                                </div>
                            </div>
                        </Flex>
                    </div>
            </Flex>
            </div>
        </Stack>
    </div> );
}
 
export default About;