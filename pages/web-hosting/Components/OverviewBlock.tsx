import { Box, Container, Text } from '@mantine/core'
import React from 'react'
import InstallerIcon from '../../components/Icons/InstallerIcon'
import InstallerIcon2 from '../../components/Icons/InstallerIcon2'
import SettingsIcon2 from '../../components/Icons/SettingsIcon2'
import CmsIcon from '../../components/Icons/CmsIcon'
import { BsCheck2Circle } from 'react-icons/bs'
import VpsServerIcon from '../../components/Icons/VpsServerIcon'
import LifebuoyIcon from '../../components/Icons/LifebuoyIcon'
import LayoutIcon from '../../components/Icons/LayoutIcon'
import SupportIcon3 from '../../components/Icons/SupportIcon3'

type Props = {}

const OverviewBlock = (props: Props) => {

    const overviewArray = [
        { title: "WordPress 1-click installer", desc: "Enjoy building on one of the most popular platforms in use today.", icon: InstallerIcon2 },
        { title: "Easy-to-use setup wizards", desc: "Our helpful wizards will walk you through many functions.", icon: SettingsIcon2 },
        { title: "Content management systems", desc: "You have a variety of the most popular CMS platforms available.", icon: CmsIcon },
        { title: "24/7 network monitoring", desc: "Our team of Admins monitor our network around-the-clock.", icon: SupportIcon3 }
    ];


    return (
        <section className=" cta-sec bg-gray-100  border-b-l overflow-hidden relative " id='overview'>
            <div aria-hidden="true" className="flex absolute -top-96 left-1/2 transform -translate-x-1/2">
                {/* <div className="bg-gradient-to-r from-blue-50 to-blue-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-blue-200/50 dark:to-purple-900"></div> */}
                {/* <div className="bg-gradient-to-tl from-blue-50 via-blue-50 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div> */}
            </div>
            <div className="absolute inset-0 z-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgb(59 130 246 / 29%) 4.54%, rgb(59 130 246 / 28%) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>

            <Container size={"lg"} className=' relative z-10'>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-8">
                        {/* Icon Block */}

                        {overviewArray.flatMap((item, key) => {
                            return (
                                <Box className="group h-full shadow flex-1 flex flex-col justify-center bg-white rounded-xl p-4 md:p-7 dark:hover:bg-slate-800">

                                    <item.icon className='w-11 h-11' />


                                    <div className="mt-5">
                                        <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                                            {item.desc}
                                        </p>

                                    </div>

                                </Box>
                            )
                        })}


                    </div>
                </div>
            </Container>
            <div className="bg-[radial-gradient(closest-side,#7ea6fd,#5b8bf4,transparent)] h-1 absolute bottom-0 w-full z-10"></div>
        </section>

    )
}

export default OverviewBlock