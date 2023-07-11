import { Button, Image, Text, Title } from '@mantine/core'
import React from 'react'

type Props = {}

const Section3 = (props: Props) => {
    return (
        <section className=' bg-slate-50'>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <Image
                            alt="Party"
                            src="./brand-domain-woman-image.png"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    <div className="lg:py-24">
                        <Title className="text-3xl font-bold sm:text-4xl">Memorable domains that<br/> leave a lasting impression.</Title>
                        <Text className="mt-4 text-gray-600">
                            Your online presence starts with your domain name. It&apos;s the first impression your customers have of your brand, so it&apos;s essential to make it memorable and reflective of your business.
                            We offer a vast selection of catchy and memorable domain extension that will help you establish your online identity and stand out from the competition.
                        </Text>
                        <Button
                            component='a'
                            href="#"
                            radius={"xl"}
                            size='md'
                         className=' bg-blue-ribbon-500 mt-8'
                        >
                            Search for domains
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3