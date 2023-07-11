import React, { useEffect, useLayoutEffect } from 'react'
import { TldInterface } from '../../../types/TldInterface'
import { ActionIcon, Badge, Button, Group, HoverCard, Loader, Popover, Stack, Text, Title } from '@mantine/core'
import CurrencyFormat from 'react-currency-format'
import { trpc } from '../../../utils/trpc'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import dateFormat, { masks } from "dateformat";
import _ from 'lodash'

const DomainListItem = ({ item }: { item: { domain: string, _id: string, inCart: boolean } }) => {
    let domainCheck = trpc.search.subquery.useMutation()
    let addToCartMutation = trpc.search.addToCart.useMutation()
    let domainCartQuery = trpc.cart.domainCart.useQuery({})

    let utils = trpc.useContext()

    useEffect(() => {

        domainCheck.mutate({ query: item.domain })

    }, [])

    let tld: any = domainCheck?.data

    let chart: any = domainCartQuery?.data


    return (
        <div className='px-6 py-4 flex justify-between items-center h-16'>

            <Group>
                <Title order={4} fw={600}>{item.domain}</Title>
                {tld?.status == "taken" && <>
                    <Group>
                        <Button component='a' radius={"xl"} href={`/whois?search=${item.domain}`} target="_blank" variant="light" style={{ fontSize: 12 }} uppercase>WHOIS</Button>

                    </Group>
                </>}

            </Group>
            {domainCheck.isLoading ? (<div><Loader size={"sm"} /></div>) : (

                <Group spacing={20}>

                    {tld?.status == "register" ? (
                        <>
                            {tld?.promo ? (
                                <>
                                    <div className='flex flex-col justify-end'>
                                        <Group spacing={10} className=' items-center'>
                                            <Group spacing={2}>
                                                <Text size={16} fw={600}>
                                                    <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={tld?.promoPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} suffix='/yr' />
                                                </Text>

                                                <Popover width={250} position="bottom" withArrow shadow="md">
                                                    <Popover.Target>
                                                        <ActionIcon><AiOutlineInfoCircle /></ActionIcon>
                                                    </Popover.Target>
                                                    <Popover.Dropdown className=' bg-gray-900 text-gray-50'>
                                                        <Text size="sm">
                                                            We offer a lower first-year price to help you
                                                            get up and running online. After the first
                                                            year, your domain will renew at the standard <Text fw={700}><CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={tld?.price} displayType={'text'} thousandSeparator={true} prefix={'$'} suffix='/yr' />.</Text>
                                                        </Text>
                                                    </Popover.Dropdown>
                                                </Popover>
                                            </Group>

                                            <Text fw={600} className='line-through '>
                                                <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={tld?.price} displayType={'text'} thousandSeparator={true} prefix={'$'} suffix='/yr' />
                                            </Text>

                                        </Group>
                                        <Text fz="xs">for the first year</Text>
                                    </div>

                                </>
                            ) : (
                                <>
                                    <div className=' flex flex-col justify-end items-center text-right'>
                                        <Text size={16} fw={600} align="right" ff={"system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Helvetica Neue,sans-serif"}>
                                            <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={tld?.price} displayType={'text'} thousandSeparator={true} prefix={'$'} suffix='/yr' />

                                        </Text>
                                        <Text fz={"sm"}>
                                            {'then'} <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={tld?.renewPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} suffix='/yr' />
                                        </Text>
                                    </div>
                                </>
                            )}

                            <Button onClick={() => {
                                addToCartMutation.mutate({ name: item.domain, id: tld.id }, {
                                    onSettled(data, error, variables, context) {

                                        setTimeout(() => {
                                            utils.cart.domainCart.refetch()
                                            utils.search.featuredList.refetch()
                                        }, 200);

                                    },
                                    onError(error:any, variables, context) {
                                        console.log(error);

                                    },
                                })



                            }}  loading={addToCartMutation.isLoading} disabled={_.some(chart?.domainSelected, { domainName: item.domain })} variant='outline' className=' border-blue-ribbon-500 hover:bg-blue-ribbon-100 text-blue-ribbon-500' radius={"xl"}>
                                {!item?.inCart ? "Buy now" : "In Cart"}</Button>

                        </>
                    ) : <Button variant='filled' className=' bg-gray-400 hover:bg-gray-500' radius={"xl"}>Make offer</Button>}

                </Group>
            )}

        </div>
    )
}

export default DomainListItem