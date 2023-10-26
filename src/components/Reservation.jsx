import { Box, Flex, Input, NumberInput, Text, Textarea, Title } from "@mantine/core";
import { TbPhone, TbUser, TbMail, TbMan, TbCalendarDue, TbClockHour3 } from "react-icons/tb";
import React from "react";
import Link from "next/link";
import { DateInput } from "@mantine/dates";

const Reservation = () => {
    return ( <div className="m-10 bg-black p-10">
        <Flex direction="row">
            <div className="w-1/2 m-5 text-white">
                <Flex direction="column" gap="lg">
                    <div><Text>BOOK A TABLE</Text></div>
                    <div><Title order={1}>Reservation</Title></div>
                    <div>
                        <Text>Sed luctus massa purus, sed dapibus ex 
                        condimentum sed. Vestibulum eget imperdiet metus, 
                        varius facilisis nisl. Integer et sem eros. Pellentesque 
                        ullamcorper imperdiet laoreet. Orci varius natoque penatibus 
                        et magnis dis parturient montes, nascetur ridiculus mus.
                        </Text>
                    </div>
                    <div><Text>We accept reservation. call us or complete the form below</Text></div>
                    <div><TbPhone /></div>
                    <div><Link href="+18464558999"><Text>+1 (846) 455 - 8999</Text></Link></div>
                </Flex>
            </div>
            <div className="m-5">
                <Box bg="white" className="p-5">
                    <div className="flex flex-row justify-between gap-3 items-center m-5">
                        <Input placeholder="Name" leftSection={<TbUser size={16} />} size="lg"/>
                        <Input placeholder="Email" leftSection={<TbMail size={16} />} size="lg"/>
                    </div>
                    <div className="flex flex-row justify-between gap-3 items-center  m-5">
                        <NumberInput hideControls placeholder="Phone" leftSection={<TbPhone size={16} />} size="lg"/>
                        <Input
                            size="lg"
                            leftSection={<TbMan size={16} />}
                            placeholder="Number of persons"
                        />
                    </div>
                    <div className="flex flex-row justify-between gap-3 items-center m-5">
                        <DateInput placeholder="dd/mm/yyyy" leftSection={<TbCalendarDue size={16} />} size="lg"/>
                        <Input placeholder="00:00" leftSection={<TbClockHour3 size={16} />} size="lg"/>
                    </div>
                    <div className="m-5">
                        <Textarea
                            size="lg"
                            placeholder="Special Message Write Here"
                        />
                    </div>
                    <div className="m-5"><button type="submit" className="border border-black p-3">BOOK MY TABLE</button></div>
                </Box>
            </div>
        </Flex>
    </div> );
}
 
export default Reservation;