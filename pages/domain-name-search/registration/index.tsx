import { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { withTheme } from '../../Layout/HocFront'
import { ActionIcon, Badge, Box, Button, Card, CloseButton, Container, Drawer, Footer, Group, Image, ScrollArea, Skeleton, Text, TextInput, Title, useMantineTheme } from '@mantine/core'
import { useForm } from '@mantine/form';
import { IconArrowLeft, IconArrowRight, IconCircleX, IconHomeCancel, IconSearch, IconX } from '@tabler/icons';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineCloseCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import CurrencyFormat from 'react-currency-format';
import { useRouter } from 'next/router';
import { trpc } from '../../../utils/trpc';
import _, { truncate } from 'lodash';
import Head from 'next/head';
import DomainListItem from '../Component/DomainListRes';
import CartList from '../Component/CartList';
import collect from 'collect.js';
import { PageLinks } from '../../Data/Home/PageLinks';
import { useRecoilState } from 'recoil';
import { domainState } from '../../../atoms/domainState';
import { useTimeout } from '@mantine/hooks';

const Index = (props: any) => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<string>(`${router.query.search}`)
    const [openCart, setopenCart] = useState(false)
    const searchMutation: any = trpc.search.query.useMutation({})
    const checkAuthMutation = trpc.cart.checkAuth.useMutation()
    const [selectTld, setselectTld] = useRecoilState<any>(domainState);
    const linkContact = PageLinks
    const theme = useMantineTheme();
    const form = useForm({
        initialValues: {
            search: searchTerm,
        },
    });

    const [domainName, setdomainName] = useState<{ name: string, ext: string }>()

    let addToCartMutation = trpc.search.addToCart.useMutation()
    let domainCartQuery = trpc.cart.domainCart.useQuery({}, {
        onSuccess(data: any) {

            const collection = collect(data?.domainSelected);
            if (_.isEmpty(collection.firstWhere('domainName', domainMain?.domain))) {
                // setselectTld({ inner: [...selectTld.inner, domainMain] });
            }
        },
    })

    let featuredListQuery = trpc.search.featuredList.useQuery({ name: domainName?.name, ext: domainName?.ext }, {
        keepPreviousData: true,
        onSuccess(data) {
            setfeatureListArray(data)
        },
    })

    const [featureListArray, setfeatureListArray] = useState<any[]>(searchMutation?.data?.featuredList)

    let utils = trpc.useContext()

    const [hiddenBox, setHiddenBox] = useState(false)



    useEffect(() => {



        const delayDebounceFn = setTimeout(() => {
            setHiddenBox(_.isEmpty(form.values.search))


            if (_.isEmpty(form.values.search)) {
                router.replace('/domain-name-search/registration', undefined, { shallow: true });
            }
            else {

                router.push({
                    pathname: '/domain-name-search/registration',
                    query: { search: form.values.search },
                });
            }

            searchMutation.mutate({ query: form.values.search }, {

                onSuccess(data: any) {

                    console.log(data);

                    setdomainName({ name: data.query, ext: data.ext })
                    setfeatureListArray(data.featuredList)
                    // setbuttonInCart(data?.inCart);


                },
                onError(error: any) {
                    console.log(error);
                },
            })
            // Send Axios request here
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

    let domainMain: any = searchMutation?.data

    let cart: any = domainCartQuery?.data

    const totalRegisterPrice = cart?.domainSelected.reduce((acc: any, tld: any) => {

        return acc + (tld.term * (tld.promo ? tld.promoRegisterPrice : tld.registerPrice))
    }, 0);




    return (
        <>
            <Head>
                <title>Domain Registration</title>
            </Head>

            <div className=' min-h-[50vh] mb-20'>
                <Container size={"lg"} className='mt-16 px-24'>
                    <Box className=' shadow w-full border overflow-hidden border-gray-100 rounded-xl divide-y'>
                        <form onSubmit={form.onSubmit((values) => {
                            return false;

                        })} onChange={form.onSubmit((values) => {

                            setSearchTerm(values.search)
                        })}>
                            <TextInput
                                icon={<IconSearch size={20} className=' text-gray-400' stroke={4} />}
                                radius="xl"
                                size="xl"
                                autocomplete="off"
                                className=' border-0 font-semibold text-gray-700'
                                styles={{
                                    input: {
                                        border: "none"
                                    }
                                }}
                                placeholder="Search for domains.."
                                {...form.getInputProps('search')}
                                rightSectionWidth={42}

                                rightSection={
                                    <div className={`pr-4 ${hiddenBox ? "hidden" : "flex"}`}>
                                        <ActionIcon onClick={() => {
                                            setHiddenBox(true)
                                            setSearchTerm("")
                                            form.reset()
                                            router.replace('/domain-name-search/registration', undefined, { shallow: true });
                                        }} size={32} radius="xl" color={theme.primaryColor}
                                            className=' bg-gray-300' variant="filled">
                                            <IconX size={20} stroke={4} />
                                        </ActionIcon>
                                    </div>
                                }

                            />

                        </form>
                        <div className={` py-4 px-6 justify-between relative  items-center ${hiddenBox ? "hidden" : "flex"}`}>


                            <Skeleton height={25} width="30%" radius="md" className={searchMutation.isLoading ? "flex" : "hidden"} visible={searchMutation.isLoading} />

                            {searchMutation.isSuccess ? (
                                <>
                                    <Group className=' items-center'>
                                        {domainMain?.status == "register" ? (<BsCheckLg size={26} className=' text-green-500' />) : (<IconX stroke={4} color='red' size={26} />)}


                                        {domainMain?.status == "register" ?
                                            <Title order={2} fw={700} className={domainMain?.status == "register" ? 'text-green-600' : "text-red-500"}>
                                                {truncate(domainMain?.domain, {
                                                    length: 28,
                                                    omission: '...',
                                                })} is available!
                                            </Title>
                                            : <Title order={2} fw={700} className={domainMain?.status == "register" ? 'text-green-600' : "text-gray-500"}>

                                                {domainMain?.status == "invalid" ? (
                                                    <> {domainMain?.message}</>
                                                ) : (
                                                    <>Sorry, {truncate(domainMain?.domain, {
                                                        length: 28,
                                                        omission: '...',
                                                    })} is already taken</>
                                                )}



                                            </Title>}



                                    </Group>
                                </>
                            ) : <></>}


                            <Group spacing={30}>
                                {domainMain?.status == "register" && <div>

                                    {domainMain?.promo ? (
                                        <>
                                            <Title order={4}>
                                                <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={domainMain?.promoPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} suffix='/yr' />
                                            </Title>
                                            <Text className='line-through '>
                                                <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={domainMain?.price} displayType={'text'} thousandSeparator={true} prefix={'$'} suffix='/yr' />
                                            </Text>
                                        </>
                                    ) : (
                                        <>
                                            <Title order={3}>
                                                <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={domainMain?.price} displayType={'text'} thousandSeparator={true} prefix={'$'} suffix='/yr' />
                                            </Title>

                                        </>
                                    )}


                                </div>}

                                {_.isEqual(domainMain?.status, "register") &&
                                    <Button
                                        disabled={_.some(cart?.domainSelected, { domainName: domainMain.domain })}
                                        loading={addToCartMutation.isLoading}
                                        onClick={() => {
                                            addToCartMutation.mutate({ name: domainMain.domain, id: domainMain.id }, {
                                                onSuccess(data, variables, context) {

                                                    setselectTld({ inner: [...selectTld.inner, domainMain] });
                                                    utils.cart.domainCart.invalidate()

                                                },
                                            })

                                        }}
                                        radius={"xl"} className=' bg-blue-ribbon-500 hover:bg-blue-ribbon-600 '>
                                        {_.some(cart?.domainSelected, { domainName: domainMain.domain }) ? "Taken" : "Buy now"}
                                    </Button>
                                }

                                {_.isEqual(domainMain?.status, "transfer") &&
                                    <Button radius={"xl"} disabled={true} className=' bg-blue-ribbon-500 hover:bg-blue-ribbon-600 '>Taken</Button>
                                }


                            </Group>
                        </div>
                    </Box>

                    {!_.isEmpty(featureListArray) &&
                        <Box className='shadow w-full border overflow-hidden border-gray-100 rounded-xl mt-8 divide-y'>
                            {featureListArray?.map((item: any, key: number) => {
                                return (
                                    <DomainListItem key={item.domain} item={item} />
                                )
                            })}

                        </Box>}
                </Container>

                {!_.isEmpty(cart?.domainSelected) ? (
                    <>
                        <div className='bg-gray-50 py-3 drop-shadow-lg w-full fixed bottom-0 bg-footer-cart'>
                            <Container size={"lg"} className='flex justify-between'>
                                <div>
                                    <Title order={3}>
                                        {cart?.domainSelected.length} item
                                    </Title>
                                    <Group spacing={5}>
                                        <Text>Subtotal:</Text>
                                        <Text className=' text-blue-ribbon-600' fw={800}>
                                            <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={totalRegisterPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                        </Text>
                                    </Group>
                                </div>
                                <Group>
                                    <Button onClick={() => {
                                        setopenCart(true)

                                    }} variant="white" size="md" radius={"xl"}>View Cart</Button>
                                    <Button
                                        onClick={() => {
                                            checkAuthMutation.mutate({ pageName: "registration" }, {
                                                onSettled(data, error, variables, context) {
                                                    window.location.href = `${linkContact.cloudLink}/order/domain`
                                                },
                                            })

                                        }} loading={checkAuthMutation.isLoading} className=' bg-blue-ribbon-600' size="md" radius={"xl"} component='a'  >Checkout</Button>
                                </Group>
                            </Container>
                        </div>
                    </>
                ) : null}

                <Drawer
                    opened={openCart}
                    withCloseButton={false}
                    position="right"
                    size={"33.33333%"}
                    zIndex={2000}
                    onClose={() => {
                        setopenCart(false)
                    }}
                    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                    overlayOpacity={0.55}
                    overlayBlur={3}
                >
                    <div className='flex flex-col justify-between divide-y relative h-screen'>

                        <div className='flex justify-between py-4 px-4 items-center borver-b border-gray-100 w-full'>
                            <Title order={3}>Cart</Title>
                            <CloseButton onClick={() => {
                                setopenCart(false)
                            }} title="Close popover" radius={"xl"} size="xl" iconSize={25} />
                        </div>
                        <Box className='flex flex-1  px-4' component={ScrollArea}>
                            <CartList />
                        </Box>
                        {!_.isEmpty(cart?.domainSelected || cart?.product) && <div className='w-full py-4 px-6'>
                            <div className='mb-4'>
                                <Group className=' justify-between'>
                                    <Title order={3}>Subtotal</Title>
                                    <Text fw={800} size={18} className=' text-blue-ribbon-600'>
                                        <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={totalRegisterPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </Text>
                                </Group>
                            </div>
                            <Button
                            onClick={() => {
                                checkAuthMutation.mutate({ pageName: "registration" }, {
                                    onSettled(data, error, variables, context) {
                                        window.location.href = `${linkContact.cloudLink}/order/domain`
                                    },
                                })

                            }}
                            loading={checkAuthMutation.isLoading}

                             leftIcon={<AiOutlineShoppingCart size={18} />} size='md' fullWidth radius={"xl"} className=' bg-blue-ribbon-500 hover:bg-blue-ribbon-600'>
                                Continue to Cart
                            </Button>
                        </div>}

                    </div>
                </Drawer>


            </div>
        </>
    )
}

export default withTheme(Index)