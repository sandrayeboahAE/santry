import { Flex, Text, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

const HomeSlide = () => {
    return ( <div>
        <div className="bg-black p-5">
            <Flex direction="column" align="center" justify="center">
                <div className="m-5">
                  <Text c="white" fz="md">WELCOME TO FOHOLIC</Text>
                </div>
                <div className="p-5">
                    <Flex direction="column" align="center" gap="md">
                       <Title order={1} className="text-white">We do not just cook we</Title> 
                       <Title order={1} className="text-white">thread you to</Title>
                       <Title order={1} className="text-white">delicacies... </Title>
                    </Flex>
                </div>
                <div className="border border-white text-white p-4 m-5">
                  <Link href="/reservations">RESERVATION NOW</Link>
                </div>
            </Flex>
        </div>
    </div> );
}
 
export default HomeSlide;