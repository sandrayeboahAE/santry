import { Checkbox, Input, Stack, Text, Title } from "@mantine/core";
import React from "react";

const Blog = () => {
    return ( <div>
        <Stack>
            <div className="p-10 bg-slate-100 items-center flex flex-col justify-center">
                <div className="my-5"><Text FZ="lg">STAY UP TO DATE</Text></div>
                <div className="my-5"><Title>Our Blog</Title></div>
                <div className="my-5">
                    <Text fz="lg">
                        Nunc vehicula massa vitae felis suscipit, et semper ligula eleifend. 
                        Cras neque justo, congue eget congue sit amet, sodales a ipsum. Suspendisse 
                        id faucibus tellus.
                    </Text>
                </div>
            </div>
            <div className="flex flex-row gap-3 m-5">
                <div className="border rounded-md border-gray-200 p-4 flex flex-col items-center hover:bg-[url(/blog-img1.png)] hover:text-white transition duration-700 ease-in-out">
                    <div className="my-5"><Text fz="lg">JUNE 02, 2022</Text></div>
                    <div className="my-5"><Title order={1}>Simplicity is complex</Title></div>
                    <div className="flex items-center my-5"><Text fz="lg">Nunc vehicula massa vitae felis suscipit, et semper ligula eleifend. Cras neque justo, congue eget congue sit amet, sodales...</Text></div>
                    <div className="my-5"><button>READ MORE</button></div>
                </div>
                <div className="border rounded-md border-gray-200 p-4 flex flex-col items-center hover:bg-[url(/blog-img2.png)] hover:text-white transition duration-700 ease-in-out">
                    <div className="my-5"><Text fz="lg">JUNE 01, 2022</Text></div>
                    <div className="my-5"><Title order={1}>Design is Process</Title></div>
                    <div className="my-5"><Text fz="lg">Nunc vehicula massa vitae felis suscipit, et semper ligula eleifend. Cras neque justo, congue eget congue sit amet, sodales...</Text></div>
                    <div className="my-5"><button>READ MORE</button></div>
                </div>
                <div className="border rounded-md border-gray-200 p-4 flex flex-col items-center hover:bg-[url(/blog-img3.png)] hover:text-white transition duration-700 ease-in-out">
                    <div className="my-5"><Text fz="lg">JUNE 01, 2022</Text></div>
                    <div className="my-5"><Title order={1}>Aesthetic is a decision</Title></div>
                    <div className="my-5"><Text fz="lg">Nunc vehicula massa vitae felis suscipit, et semper ligula eleifend. Cras neque justo, congue eget congue sit amet, sodales...</Text></div>
                    <div className="my-5"><button>READ MORE</button></div>
                </div>
            </div>
            <div className="p-10 bg-slate-100 items-center flex flex-row justify-center">
                <div className="w-1/2 m-5">
                    <div className="my-5"><Text FZ="xl">SUBSCRIBE TO OUR NEWSLETTER</Text></div>
                    <div className="my-5">
                        <Title>
                            Happiness is an extra scoop of a soup. Discover the most delicious recipes.
                        </Title>
                    </div>
                </div>

                <div className="w-1/2 my-5 flex flex-col gap-4 items-start">
                    <Input placeholder="Your Email Address" size="lg"/>
                    <Checkbox
                      defaultChecked
                      label="I have agree to the terms & conditions"
                      color="gray"
                      size="md"
                    />
                    <div>
                       <button type="submit" className="border border-black px-5 py-3">SIGN UP</button>
                    </div>
                </div>
            </div>
        </Stack>
    </div> );
}
 
export default Blog;