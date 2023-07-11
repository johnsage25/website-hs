import { Button, Container } from '@mantine/core'
import React from 'react'

type Props = {}

const SectionBlock = (props: Props) => {
    return (

        <section className=" bg-white relative mx-auto py-20 px-4 md:px-8 overflow-hidden">
            <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgb(59 130 246 / 29%) 4.54%, rgb(59 130 246 / 28%) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>

            <Container size={"lg"}>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
                <div className="relative z-10 gap-10 items-center lg:flex">
                    <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                        <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                            Why Should You Use HostSpacing for Shared Web Hosting?
                        </h3>
                        <p className="text-gray-500 leading-relaxed mt-3">
                            HostSpacing provides shared website hosting services that are quick and dependable at any scale. Our experts can help you migrate your website to HostSpacing quickly and for free.

                            Gain access to a shared hosting server, which brings your website closer to your audience and ensures that it runs smoothly.

                        </p>

                    </div>
                    <div className="flex-1 mt-5 mx-auto rounded-lg bg-slate-100 p-4 sm:w-9/12 lg:mt-0 lg:w-auto order-first">
                        <img
                            src="./img/woman-o-offfice.png"
                            alt=""
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>

            </Container>

        </section>


    )
}

export default SectionBlock