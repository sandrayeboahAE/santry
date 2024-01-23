import { Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

const Gallery = () => {
    return ( <div className="my-10">
        <Flex direction="column" justify="center" align="center">
            <div className="my-5"><Text fz="md">STEP INSIDE</Text></div>
            <div className="my-5"><Title order={1}>Our Gallery</Title></div>
            <div className="my-5">
                <Text fz="md">
                    Nunc vehicula massa vitae felis suscipit, 
                    et semper ligula eleifend. Cras neque justo, congue 
                    eget congue sit amet, sodales a ipsum. Suspendisse id 
                    faucibus tellus.
                </Text>
            </div>
            <div className="my-5">
                <Flex direction="row" gap="md">
                    <Image src="/gallery-img1.png" alt="gallery" width="300" height="300" />
                    <Image src="/gallery-img2.png" alt="gallery" width="300" height="300" />
                    <Image src="/gallery-img3.png" alt="gallery" width="300" height="300" />
                    <Image src="/gallery-img4.png" alt="gallery" width="300" height="300" />
                    <Image src="/gallery-img6.png" alt="gallery" width="300" height="300" />
                </Flex>
            </div>
        </Flex>
    </div> );
}
 
export default Gallery;