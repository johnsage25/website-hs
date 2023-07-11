import React, { useState } from 'react'
import { trpc } from '../../../utils/trpc'
import { ActionIcon, Badge, Button, Card, Center, Group, Loader, Paper, Select, Text, Title } from '@mantine/core'
import CurrencyFormat from 'react-currency-format'
import { calculateDiscountPercentageHelper } from '../../../utils/helpers'
import { BsTrash } from 'react-icons/bs'
import _ from 'lodash'
import { domainState } from '../../../atoms/domainState'
import { useRecoilState } from 'recoil'



const CartList = (props: any) => {

    let domainCartQuery = trpc.cart.domainCart.useQuery()
    let deleteTldOrderMutation = trpc.cart.deleteTldOrder.useMutation()
    let updateTermMutation = trpc.cart.updateTerm.useMutation()
    let utils = trpc.useContext()
    let chart: any = domainCartQuery?.data
    const [selectTld, setselectTld] = useRecoilState<any>(domainState);
    const [loading, setloading] = useState("")


    return (
        <div className='flex flex-col relative gap-y-4 my-4'>

            {domainCartQuery.isLoading && <>
                <Center>
                    <Loader size="lg" />
                </Center>
            </>}


            {domainCartQuery.isSuccess &&
                <>
                    {!_.isEmpty(chart?.domainSelected) ? (<>
                        <div className=' space-y-2'>
                            <Text fw={700} className=' text-gray-400'>Domain Registration</Text>
                            <div className='flex flex-col relative gap-y-4 '>
                                {chart?.domainSelected?.map((item: any, key: number) => {

                                    let yearData = Array.from({ length: item?.maxPeriod }, (_, index) => index + 1)
                                        .map((item: any) => {
                                            return {
                                                value: item,
                                                label: `${item} Year`
                                            }
                                        })

                                    return (
                                        <Paper key={key} radius="sm" className=' divide-y' withBorder style={{ overflow: "none" }}>


                                            <Group position="apart" mb="xs" className='py-2 px-4'>
                                                <div>
                                                    <Text weight={800}>{item?.domainName}</Text>
                                                    <Text size={12}>Domain Registration</Text>
                                                </div>

                                                {item?.promo && <Badge color="blue" variant="light">
                                                    {`${calculateDiscountPercentageHelper(item?.registerPrice, item?.promoRegisterPrice)?.toFixed(1)}% off`}
                                                </Badge>}


                                                <ActionIcon loading={deleteTldOrderMutation.isLoading && loading == item._id} onClick={() => {

                                                    console.log(selectTld, item);

                                                    setloading(item._id)

                                                    deleteTldOrderMutation.mutate({ id: item._id }, {
                                                        onSuccess(data, variables, context) {
                                                            utils.cart.domainCart.invalidate()
                                                            utils.search.featuredList.invalidate()
                                                            setselectTld({ inner: [...selectTld?.inner.filter((item: any) => item?.id !== item?._id)] });

                                                        },
                                                    })
                                                }} radius={"xl"}>
                                                    <BsTrash />
                                                </ActionIcon>
                                            </Group>
                                            <div className='py-4 px-4'>
                                                <Group className=' justify-between items-center'>
                                                    <Select
                                                        defaultValue={item?.term}
                                                        data={yearData}
                                                        onChange={(selected) => {

                                                            updateTermMutation.mutate({
                                                                term: parseInt(`${selected}`),
                                                                id: item._id
                                                            }, {
                                                                onSuccess(data, variables, context) {
                                                                    utils.cart.domainCart.invalidate()
                                                                    utils.search.featuredList.invalidate()

                                                                },
                                                            })


                                                        }}
                                                        radius={"xl"}
                                                    />
                                                    <Group className=' items-center'>
                                                        <div className=' text-right'>
                                                            {item?.promo ? <>
                                                                <Text fz={"md"} className='text-blue-ribbon-600' fw={700}>
                                                                    <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={item?.promoRegisterPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} suffix='/yr' />
                                                                </Text>
                                                                <Text size={12} className='line-through '>
                                                                    <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={item?.registerPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} suffix='/yr' />
                                                                </Text></> :
                                                                <>
                                                                    <Text className='text-blue-ribbon-600' fz={"md"} fw={700}>
                                                                        <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={item?.registerPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} suffix='/yr' />
                                                                    </Text>
                                                                </>
                                                            }



                                                        </div>

                                                    </Group>
                                                </Group>

                                            </div>

                                        </Paper>
                                    )
                                })}
                            </div>
                        </div></>) :
                        (<>
                            <div>
                                <Text className=' text-center'>There are no items in your basket.</Text>
                            </div>
                        </>)}

                </>
            }

        </div>
    )
}

export default CartList