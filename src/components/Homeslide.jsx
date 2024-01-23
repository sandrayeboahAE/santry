import { Flex, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

const HomeSlide = () => {
    return ( <div>
        <div className="homeslide flex items-center justify-center">
            <Flex direction="column" align="center" justify="center">
                <div className="m-5">
                  <Text c="white" fz="xl">WELCOME TO FOHOLIC</Text>
                </div>
                <div className="p-5">
                    <Flex direction="column" align="center">
                       <p className="headers">We do not just cook we</p> 
                       <p className="headers">thread you to delicacies... </p>
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