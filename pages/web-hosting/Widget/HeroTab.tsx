import { Container, Text } from '@mantine/core'
import { useHash, useScrollIntoView, useWindowScroll } from '@mantine/hooks';
import React, { useEffect, useState } from 'react'
import StickyBox from "react-sticky-box";

const HeroTab = (props: any) => {

    const tabItems = ["Overview", "Features", "Plans", "Migration", "FAQ"]
    const [selectedItem, setSelectedItem] = useState(0)
    const [hash, setHash] = useHash();

    const [scroll, scrollTo] = useWindowScroll()


    useEffect(() => {
        const nav = document.querySelector(".navbar");

    }, [])




    return (
        <StickyBox offsetTop={0} className="px-4 shadow z-20 relative bg-white">
            <section >
                <Container size={"lg"}>
                    <ul role="tablist" className=" herotab max-w-screen-xl mx-auto border-b flex items-center gap-x-3 overflow-x-auto text-sm">
                        {
                            tabItems.map((item, idx) => (
                                <li key={idx} className={`py-2 border-b-2 ${selectedItem == idx ? "border-hscolor-600 text-hscolor-600" : "border-white text-gray-800"}`}>
                                    <button
                                        role="tab"
                                        aria-selected={selectedItem == idx ? true : false}
                                        aria-controls={`tabpanel-${idx + 1}`}
                                        className="py-2.5 px-4 rounded-lg duration-150 hover:text-hscolor-600 active:bg-gray-100 font-medium"
                                        onClick={() => {
                                            setHash(tabItems[idx]?.toLocaleLowerCase())
                                            switch (idx) {
                                                case 1:
                                                    document.querySelector('#feature')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                    break;
                                                case 3:
                                                    document.querySelector('#migration')?.scrollIntoView({ behavior: 'smooth', block: "start" });
                                                    break;
                                                default:
                                                    document.querySelector('#overview')?.scrollIntoView({ behavior: 'smooth', block: 'end' });
                                                    break;
                                            }

                                            setSelectedItem(idx)
                                        }}
                                    >
                                        <Text size={"sm"} fw={600}>{item}</Text>
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </Container>
            </section>
        </StickyBox>


    )
}

export default HeroTab