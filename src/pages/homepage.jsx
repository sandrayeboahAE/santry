import { Flex, Text } from "@mantine/core";
import Image from "next/image";
import { TbBrandFacebookFilled, TbBrandTwitterFilled, TbBrandInstagram, TbBrandYoutubeFilled } from "react-icons/tb";
import React from "react";
import HomeSlide from "@/components/Homeslide";
import About from "@/components/About";
import Team from "@/components/Team";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

const HomePage = () => {
    return ( <div className="w-screen">
        <Flex>
            <div className="fixed w-1/5 p-8 border shadow-md h-screen bg-white">
                <div className="mb-10"><Image src="/logo.png" alt="page logo" width="250" height="250" /></div>
                <div className="mb-20">
                    <div className="px-3 py-4 hover:font-black"><Text fw="bolder" c="gray">HOME</Text></div>
                    <div className="px-3 py-4 hover:font-black"><Text fw="bolder" c="gray">ABOUT</Text></div>
                    <div className="px-3 py-4 hover:font-black"><Text fw="bolder" c="gray">TEAM</Text></div>
                    <div className="px-3 py-4 hover:font-black"><Text fw="bolder" c="gray">MENU</Text></div>
                    <div className="px-3 py-4 hover:font-black"><Text fw="bolder" c="gray">RESERVATION</Text></div>
                    <div className="px-3 py-4 hover:font-black"><Text fw="bolder" c="gray">GALLERY</Text></div>
                    <div className="px-3 py-4 hover:font-black"><Text fw="bolder" c="gray">BLOG</Text></div>
                    <div className="px-3 py-4 hover:font-black"><Text fw="bolder" c="gray">CONTACT</Text></div>
                </div>
                <div className="border border-gray-600 px-2 py-3 mb-10">
                    <Flex direction="column" align="center">
                        <Text fz="md" c="gray">BOOK YOUR TABLE</Text>
                        <Text fw="bold" fz="xl">(123) - 456 - 7788</Text>
                    </Flex>
                </div>
                <div>
                    <Flex direction="row">
                        <div className="border border-gray-600 text-gray-600 rounded-full m-3 p-4  hover:text-black"> <a href="https://facebook.com/santry123"><TbBrandFacebookFilled /></a></div>
                        <div className="border border-gray-600 text-gray-600 rounded-full m-3 p-4  hover:text-black"> <a href="https://twitter.com/santry123"><TbBrandTwitterFilled /></a></div>
                        <div className="border border-gray-600 text-gray-600 rounded-full m-3 p-4  hover:text-black"> <a href="https://instagram.com/santry123"><TbBrandInstagram /></a></div>
                        <div className="border border-gray-600 text-gray-600 rounded-full m-3 p-4  hover:text-black"> <a href="https://youtube.com/santry123"><TbBrandYoutubeFilled /></a></div>
                    </Flex>
                </div>
            </div>
            <div className="w-4/5 ml-96">
                <HomeSlide />
                <About />
                <Team />
                <Menu />
                <Reservation />
                <Gallery />
                <Blog />
                <Contact />
            </div>
        </Flex>
    </div> );
}
 
export default HomePage;