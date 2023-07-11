import { Title, Text, Container, Button, Overlay, createStyles, Input } from '@mantine/core';
import imageDo from '../../../public/img/internet-domain-names.jpeg'
import { useForm } from '@mantine/form';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: 120,
        paddingBottom: 120,
        backgroundSize: 'cover',
        zIndex: 10,
        backgroundPosition: 'center',

        '@media (max-width: 520px)': {
            paddingTop: 80,
            paddingBottom: 50,
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    title: {
        fontWeight: 800,
        fontSize: 40,
        letterSpacing: -1,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        '@media (max-width: 520px)': {
            fontSize: 28,
            textAlign: 'left',
        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][4],
    },

    description: {
        color: theme.colors.gray[0],
        textAlign: 'center',

        '@media (max-width: 520px)': {
            fontSize: theme.fontSizes.md,
            textAlign: 'left',
        },
    },

    controls: {
        marginTop: theme.spacing.xl * 1.5,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,

        '@media (max-width: 520px)': {
            flexDirection: 'column',
        },
    },

    control: {
        height: 42,
        fontSize: theme.fontSizes.md,

        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        '@media (max-width: 520px)': {
            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },

    secondaryControl: {
        color: theme.white,
        backgroundColor: 'rgba(255, 255, 255, .4)',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, .45) !important',
        },
    },
}));

export default function SearchBar() {
    const { classes, cx } = useStyles();
    const router = useRouter();

    const form = useForm({
        initialValues: {
            search: "",
        },
    });

    return (
        <section className='relative bg-blue-ribbon-800 overflow-hidden'>
            {/* <Overlay color="#000" opacity={0.15} zIndex={1} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className=' absolute z-1'>
                <defs>
                    <linearGradient id="gggyrate-grad" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(230, 55%, 50%)"></stop>
                        <stop offset="100%" stopColor="hsl(230, 55%, 70%)"></stop>
                    </linearGradient>
                </defs>
                <g fill="none" stroke="url(#gggyrate-grad)" strokeWidth="5">
                    <path
                        d="M659.863 90.678a55.89 55.89 0 0140.2 38.824l97.748 340.886a55.884 55.884 0 01-13.52 54.226L537.95 779.708a55.892 55.892 0 01-53.724 15.406l-344.089-85.792a55.89 55.89 0 01-40.2-38.824L2.19 329.612a55.884 55.884 0 0113.519-54.226L262.05 20.292a55.892 55.892 0 0153.724-15.406l344.089 85.792z"
                        opacity="0.05"
                    ></path>
                    <path
                        d="M637.595 96.26a53.35 53.35 0 0139.643 35.699l104.604 321.936a53.344 53.344 0 01-11.09 52.18L544.247 757.632a53.351 53.351 0 01-50.737 16.486L162.405 703.74a53.35 53.35 0 01-39.643-35.698L18.158 346.105a53.344 53.344 0 0111.09-52.18L255.753 42.368a53.351 53.351 0 0150.737-16.486L637.595 96.26z"
                        opacity="0.1"
                    ></path>
                    <path
                        d="M616.048 103.004a50.809 50.809 0 0138.918 32.66L765.23 438.606a50.804 50.804 0 01-8.822 50.034L549.182 735.6a50.81 50.81 0 01-47.743 17.378l-317.487-55.982a50.809 50.809 0 01-38.918-32.66L34.77 361.395a50.804 50.804 0 018.822-50.034L250.818 64.4a50.81 50.81 0 0147.743-17.378l317.487 55.982z"
                        opacity="0.14"
                    ></path>
                    <path
                        d="M595.274 110.862a48.268 48.268 0 0138.033 29.718l114.729 283.964a48.264 48.264 0 01-6.717 47.796L552.764 713.68a48.27 48.27 0 01-44.753 18.082l-303.285-42.624a48.268 48.268 0 01-38.033-29.718L51.964 375.456a48.264 48.264 0 016.717-47.796L247.236 86.32a48.27 48.27 0 0144.753-18.082l303.285 42.624z"
                        opacity="0.19"
                    ></path>
                    <path
                        d="M575.324 119.79a45.728 45.728 0 0136.992 26.88L730.329 411.73a45.723 45.723 0 01-4.78 45.475L555.007 691.939a45.73 45.73 0 01-41.773 18.599l-288.557-30.329a45.728 45.728 0 01-36.992-26.879L69.671 388.27a45.723 45.723 0 014.78-45.475l170.543-234.733a45.73 45.73 0 0141.773-18.599l288.557 30.329z"
                        opacity="0.23"
                    ></path>
                    <path
                        d="M556.247 129.74a43.187 43.187 0 0135.801 24.151l120.126 246.294a43.183 43.183 0 01-3.012 43.08L555.928 670.443a43.19 43.19 0 01-38.815 18.932l-273.36-19.115a43.187 43.187 0 01-35.801-24.151L87.826 399.815a43.183 43.183 0 013.012-43.08l153.234-227.178a43.19 43.19 0 0138.815-18.932l273.36 19.115z"
                        opacity="0.28"
                    ></path>
                    <path
                        d="M538.09 140.66a40.647 40.647 0 0134.467 21.541l121.08 227.72a40.643 40.643 0 01-1.417 40.619L555.55 649.258a40.649 40.649 0 01-35.889 19.082l-257.75-9a40.647 40.647 0 01-34.468-21.541L106.363 410.08a40.643 40.643 0 011.417-40.62l136.67-218.718a40.649 40.649 0 0135.889-19.082l257.75 9z"
                        opacity="0.32"
                    ></path>
                    <path
                        d="M520.895 152.5a38.107 38.107 0 0132.999 19.054l120.894 209.394a38.103 38.103 0 010 38.105L553.894 628.447a38.108 38.108 0 01-33 19.054H279.106a38.107 38.107 0 01-33-19.055L125.213 419.052a38.103 38.103 0 010-38.105l120.894-209.394a38.108 38.108 0 0133-19.054h241.789z"
                        opacity="0.37"
                    ></path>
                    <path
                        d="M504.704 165.202a35.566 35.566 0 0131.401 16.699l119.587 191.378a35.563 35.563 0 011.241 35.542L550.988 608.075a35.568 35.568 0 01-30.16 18.847l-225.532 7.876a35.566 35.566 0 01-31.401-16.699L144.308 426.721a35.563 35.563 0 01-1.241-35.542l105.945-199.254a35.568 35.568 0 0130.16-18.847l225.532-7.876z"
                        opacity="0.41"
                    ></path>
                    <path
                        d="M489.557 178.713a33.026 33.026 0 0129.682 14.479l117.179 173.724a33.022 33.022 0 012.304 32.944l-91.86 188.342a33.027 33.027 0 01-27.38 18.467l-209.04 14.618a33.026 33.026 0 01-29.68-14.479l-117.18-173.724a33.022 33.022 0 01-2.304-32.944l91.86-188.342a33.027 33.027 0 0127.38-18.467l209.04-14.618z"
                        opacity="0.46"
                    ></path>
                    <path
                        d="M475.49 192.975a30.485 30.485 0 0127.847 12.4l113.696 156.489a30.482 30.482 0 013.187 30.316l-78.676 176.708a30.487 30.487 0 01-24.662 17.918l-192.371 20.22a30.485 30.485 0 01-27.848-12.401L182.967 438.136a30.482 30.482 0 01-3.187-30.316l78.676-176.708a30.487 30.487 0 0124.662-17.918l192.371-20.22z"
                        opacity="0.5"
                    ></path>
                    <path
                        d="M462.533 207.927a27.945 27.945 0 0125.909 10.47L597.606 358.12a27.942 27.942 0 013.889 27.671l-66.422 164.4a27.946 27.946 0 01-22.02 17.205l-175.586 24.677a27.945 27.945 0 01-25.909-10.47L202.394 441.88a27.942 27.942 0 01-3.889-27.671l66.422-164.4a27.946 27.946 0 0122.02-17.205l175.586-24.677z"
                        opacity="0.55"
                    ></path>
                    <path
                        d="M450.72 223.511a25.404 25.404 0 0123.87 8.69l103.613 123.48a25.402 25.402 0 014.412 25.017l-55.131 151.47a25.405 25.405 0 01-19.46 16.33L349.28 576.49a25.404 25.404 0 01-23.87-8.69L221.796 444.32a25.402 25.402 0 01-4.412-25.017l55.131-151.47a25.405 25.405 0 0119.46-16.33L450.72 223.51z"
                        opacity="0.59"
                    ></path>
                    <path
                        d="M440.077 239.664a22.864 22.864 0 0121.743 7.066l97.073 107.81a22.862 22.862 0 014.754 22.363l-44.83 137.972c-2.524 7.768-9.001 13.6-16.99 15.3l-141.904 30.161a22.864 22.864 0 01-21.743-7.066l-97.073-107.81a22.862 22.862 0 01-4.754-22.363l44.83-137.972c2.524-7.768 9.001-13.6 16.99-15.3l141.904-30.161z"
                        opacity="0.64"
                    ></path>
                    <path
                        d="M430.628 256.322a20.323 20.323 0 0119.535 5.603l89.58 92.762a20.321 20.321 0 014.916 19.718l-35.545 123.958a20.324 20.324 0 01-14.619 14.118l-125.123 31.197a20.323 20.323 0 01-19.535-5.603l-89.58-92.762a20.321 20.321 0 01-4.916-19.718l35.545-123.958a20.324 20.324 0 0114.619-14.118l125.123-31.197z"
                        opacity="0.68"
                    ></path>
                    <path
                        d="M422.396 273.423a17.783 17.783 0 0117.254 4.303l81.166 78.382a17.781 17.781 0 014.902 17.093L498.42 482.683a17.784 17.784 0 01-12.353 12.792l-108.464 31.102a17.783 17.783 0 01-17.254-4.303l-81.166-78.382a17.781 17.781 0 01-4.902-17.093l27.297-109.482a17.784 17.784 0 0112.353-12.792l108.464-31.102z"
                        opacity="0.73"
                    ></path>
                    <path
                        d="M415.398 290.902a15.243 15.243 0 0114.909 3.17l71.874 64.715a15.241 15.241 0 014.71 14.495l-20.108 94.602a15.243 15.243 0 01-10.2 11.328l-91.981 29.886a15.243 15.243 0 01-14.91-3.17l-71.873-64.715a15.241 15.241 0 01-4.71-14.495l20.108-94.602a15.243 15.243 0 0110.2-11.328l91.981-29.886z"
                        opacity="0.77"
                    ></path>
                    <path
                        d="M409.651 308.692a12.702 12.702 0 0112.509 2.207l61.74 51.806a12.7 12.7 0 014.344 11.935l-13.995 79.372a12.703 12.703 0 01-8.165 9.73l-75.735 27.566a12.702 12.702 0 01-12.509-2.207l-61.74-51.806a12.7 12.7 0 01-4.344-11.935l13.995-79.372a12.703 12.703 0 018.165-9.73l75.735-27.566z"
                        opacity="0.82"
                    ></path>
                    <path
                        d="M405.167 326.729a10.162 10.162 0 0110.062 1.415l50.809 39.696a10.16 10.16 0 013.806 9.42l-8.973 63.85a10.162 10.162 0 01-6.256 8.008l-59.782 24.153a10.162 10.162 0 01-10.062-1.415l-50.809-39.696a10.16 10.16 0 01-3.806-9.42l8.973-63.85a10.162 10.162 0 016.256-8.008l59.782-24.153z"
                        opacity="0.86"
                    ></path>
                    <path
                        d="M401.955 344.945a7.621 7.621 0 017.58.797l39.121 28.424a7.62 7.62 0 013.1 6.962l-5.055 48.093a7.622 7.622 0 01-4.48 6.165l-44.176 19.669a7.621 7.621 0 01-7.58-.797l-39.121-28.424a7.62 7.62 0 01-3.1-6.962l5.055-48.093a7.622 7.622 0 014.48-6.165l44.176-19.669z"
                        opacity="0.91"
                    ></path>
                    <path
                        d="M400.022 363.274a5.08 5.08 0 015.068.354l26.727 18.028a5.08 5.08 0 012.227 4.566l-2.249 32.16a5.081 5.081 0 01-2.84 4.212l-28.977 14.132a5.08 5.08 0 01-5.068-.354l-26.727-18.028a5.08 5.08 0 01-2.227-4.566l2.249-32.16a5.081 5.081 0 012.84-4.212l28.977-14.132z"
                        opacity="0.95"
                    ></path>
                    <path
                        d="M399.37 381.648a2.54 2.54 0 012.539.088l13.67 8.542a2.54 2.54 0 011.192 2.243l-.562 16.11a2.54 2.54 0 01-1.347 2.154l-14.232 7.567a2.54 2.54 0 01-2.539-.088l-13.67-8.542a2.54 2.54 0 01-1.192-2.243l.562-16.11a2.54 2.54 0 011.347-2.154l14.232-7.567z"
                        opacity="1"
                    ></path>
                </g>
            </svg>

            <div className={classes.wrapper}>



                <div className={classes.inner}>
                    <Title className={classes.title}>
                        Domain Name Search
                    </Title>

                    <Container size={640}>
                        <Text size="lg" className={classes.description}>
                            Easily check domain name availability with our quick checker. Simply enter your desired name for instant results.
                        </Text>
                    </Container>
                    <form onSubmit={form.onSubmit((values) => {
                         router.push({
                            pathname: '/domain-name-search/registration',
                            query: { search: values.search },
                        });

                    })}>
                        <div className='max-w-4xl gap-3 flex mx-auto mt-8'>

                            <Input styles={{
                                input: {
                                    border: "1px solid #fff",
                                    height: 50
                                }

                            }} autoCorrect='off' {...form.getInputProps('search')} placeholder='Enter your desired domain name' size='md' className=' border-0 border-white rounded-full flex-1' radius={'xl'} />
                            <Button size='lg' type='submit' radius={"xl"} className=' md:w-44 bg-blue-ribbon-500 hover:bg-blue-ribbon-600'>Search</Button>

                        </div>
                    </form>
                    <div className=' text-center py-6'>
                        {/* <Text className=' text-gray-50'>For a year, prices start at just $4.99. Although absurd, it is true.</Text> */}
                    </div>
                </div>


            </div>
        </section>
    );
}