import { BackgroundImage, Center, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { TbDeviceMobile, TbMailFilled, TbMapPin } from "react-icons/tb";

const Contact = () => {
    return ( <div>
        <div className="flex flex-col items-center">
            <div><Text fz="lg">WHERE TO FIND US</Text></div>
            <div><Title order={1}>Our Location</Title></div>
        </div>
        <div className="text-white">
            <BackgroundImage
               src="/contact-banner.jpg">
                <Center p="lg">
                    <Flex direction="column" align="center" justify="center">
                        <div className="my-5"><Text c="white">LET US TALK</Text></div>
                        <div className="my-10"><Title>Contact Us</Title></div>
                        <div className="my-10">
                            <Flex direction="row" gap="lg" justify="space-between">
                                <div className="flex flex-col items-center">
                                    <TbMapPin size={46}/>
                                    <Text fz="xl">888 HOWARD ST, CA</Text>    
                                </div>
                                <div className="flex flex-col items-center">
                                    <TbDeviceMobile size={46}/>
                                    <Text fz="xl">+1 (846) 455 - 8999</Text>
                                </div>
                                <div className="flex flex-col items-center">
                                    <TbMailFilled size={46}/>
                                    <Text fz="xl">CONTACT@FOHOLIC.COM</Text>
                                </div>
                            </Flex>
                        </div>
                        <div className="my-10"><Text fz="lg">2022 © FOHOLIC. ALL RIGHTS RESERVED. DESIGN BY THE_KRISHNA</Text></div>
                    </Flex>
                </Center>
            </BackgroundImage>
        </div>
    </div> );
}
 
export default Contact;