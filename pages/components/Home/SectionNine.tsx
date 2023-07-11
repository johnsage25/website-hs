import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
    Paper,
    Box,
    Card,
    Anchor,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from '../../../public/img/fashionable-woman-dressed-black-dress-with-shopping-bags.png'
import LifebuoyIcon from '../Icons/LifebuoyIcon';
import NextjsIcon from '../Icons/NextjsIcon';
import AngularJSIcon from '../Icons/AngularJSIcon';
import NuxtJsIcon from '../Icons/NuxtJsIcon';
import GatsbyJsIcon from '../Icons/GatsbyJsIcon';
import Slider from "react-slick";
import VmServerIconWhite from '../Icons/VmServerIconWhite';
import ManagedServerIcon from '../Icons/ManagedServerIcon';
import DedicateServer1Icon from '../Icons/DedicateServer1Icon';
import WordpressIconW from '../Icons/WordpressIconW';
import CloudServerWIcon from '../Icons/CloudServerWIcon';
import ShareHostingWIcon from '../Icons/ShareHostingWIcon';
import { IconArrowNarrowRight } from '@tabler/icons';



export function SectionNine() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    function NextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    const featuredProducts = [
        {
            icon: <DedicateServer1Icon className=' w-5 h-5' />,
            title: "Dedicated Hosting",
            desc: "Enjoy exclusive server resources without resource competition. No sharing of processing power or bandwidth with others ensures optimal performance"
        },
        {
            icon: <ManagedServerIcon className=' w-5 h-5' />,
            title: "Managed Servers",
            desc: "With a managed dedicated server, you'll get powerful dedicated hardware without the administrative hassle."
        },
        {
            icon: <VmServerIconWhite className=' w-5 h-5' />,
            title: "VPS",
            desc: " Full control, root access, SSH keys. Flexible server configurations and scalable performance options for developers, designers, and system administrators at great prices."
        },
        {
            icon: <WordpressIconW className=' w-5 h-5' />,
            title: "Managed WordPress",
            desc: "Spend less time worrying about speed, traffic limits, security, and updates with managed WordPress."
        },
        {
            icon: <CloudServerWIcon className=' w-5 h-5' />,
            title: "Cloud Hosting",
            desc: "With our cloud website hosting services, you can start small and grow big. Get more power as your website expands by having all the resources at your fingertips."
        },
        {
            icon: <ShareHostingWIcon className=' w-5 h-5' />,
            title: "Web Hosting",
            desc: "With our latest optimized server hardware, you'll get faster sites — up to nearly 40% average improvement in overall server response times"
        },
    ]



    return (
        <section className="relative py-10 overflow-hidden bg-hsfit-500 sm:py-16 lg:py-20 xl:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-end justify-between">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-hscolor-50 sm:text-4xl lg:text-4xl">
                            Explore Our Products
                        </h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300 lg:mx-0">
                            Choose the perfect product to elevate your online presence and stay ahead in the digital landscape.
                        </p>
                    </div>
                </div>

                <Box className=' mt-10'>
                    <Slider {...settings}>

                        {featuredProducts?.map((item: any, key: number) => {
                            return (
                                <div key={key} className='px-3'>
                                    <Card href='#' component='a' className=' h-56 bg-hsfit-700 hover:bg-darkgray-800'>
                                        <Card.Section className='px-5 pt-4'>
                                            <Group >
                                                {item.icon}
                                                <Text size={16} className=' text-hscolor-50 antialiased' weight={600}>{item.title}</Text>
                                            </Group>
                                        </Card.Section>

                                        <Card.Section className='px-5 mt-3'>
                                            <Text size={15} className=' text-zinc-400 antialiased'>
                                                {item.desc}
                                            </Text>
                                        </Card.Section>


                                    </Card>

                                </div>
                            )
                        })}


                    </Slider>

                </Box>

            </div>


        </section>
    );
}
