import {
  ActionIcon,
  Badge,
  Button,
  Container,
  Divider,
  Paper,
  Popover,
  SegmentedControl,
  Text,
  ThemeIcon,
  Title,
  TypographyStylesProvider,
  rem,
} from '@mantine/core'
import { IconCheck, IconCheckbox } from '@tabler/icons'
import { AppProps } from 'next/app'
import React, { useState } from 'react'
import { GoCheck } from 'react-icons/go'
import {
  BsCheck,
  BsFillBagCheckFill,
  BsInfoCircle,
  BsUiChecks,
} from 'react-icons/bs'
import CurrencyFormat from 'react-currency-format'
import collect from 'collect.js'
import { PackageTerms } from '../../../options'
import { PageLinks } from '../../Data/Home/PageLinks'
import { trpc } from '../../../utils/trpc'
import { useRouter } from 'next/router'

const AddToCart = ({ item, changePrice }: { item: any, changePrice: string }) => {
  //mutation
  const router = useRouter()
  let addToCart = trpc.cart.create.useMutation()
  const linkContact = PageLinks
  return (
    <Button
      radius={'xl'}
      className={`px-3 py-3 w-full font-semibold text-sm duration-150 text-white
      ${item.featured ? " bg-gradient-to-r from-hscolor-400 to-hscolor-600  hover:bg-hscolor-800 active:bg-hscolor-800" : "bg-gray-700 hover:bg-gray-900 active:bg-gray-900"}  `}
      fullWidth
      loading={addToCart.isLoading}
      onClick={() => {


        addToCart.mutate({ _id: item._id, period: changePrice }, {
          onSuccess(data, variables, context) {
            window.location.href = `${linkContact.cloudLink}/order/webcloud`;
            console.log(data);
          },
          onError(error, variables, context) {

          },
        })

      }}

      component="a"
      size="lg"
    >
      Get Started
    </Button>
  )
}

const ChangePrice = (priceArray?: any, value?: string) => {
  let c = collect(priceArray)
  return c.firstWhere('period', value)
}

const PricingBlock = (props: any) => {
  const linkContact = PageLinks
  const [changePrice, setchangePrice] = useState('m')
  let connections = collect(PackageTerms)


  const plans = [
    {
      name: "Basic plan",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 12,
      isMostPop: false,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",

      ],
    },
    {
      name: "Startup",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 35,
      isMostPop: true,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    {
      name: "Enterprise",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 60,
      isMostPop: false,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
  ];

  return (


    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 relative overflow-hidden before:absolute before:top-0 before:left-1/2
   ">


      <Container size={"lg"} className="mx-auto px-4 text-gray-600 md:px-8">
        <div className='relative max-w-xl mx-auto sm:text-center'>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            WordPress Plans
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Affordable Managed WordPress Hosting solution for everyone
          </p>
        </div>
        <div className='mt-16 justify-center gap-4 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
          {
            props.packages?.category[0]?.products.map((item: any, idx: number) => {

              console.log(item);

              let price = ChangePrice(item.pricing, changePrice)
              return (
                <div key={idx} className={`relative ${item.featured ? " border-blue-400 border-2" : "border "} flex-1 bg-white flex items-stretch flex-col rounded-xl  mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
                  {
                    item.featured ? (
                      <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-hscolor-500 text-center text-gray-50 text-sm font-semibold">Most popular</span>
                    ) : ""
                  }
                  <div className="p-8 space-y-4 border-b">
                    <span className='text-hscolor-600 font-medium'>
                      {item.productName}
                    </span>
                    <div className='text-gray-800 text-3xl flex gap-3 items-baseline font-semibold'>
                      <CurrencyFormat
                        value={price?.amount}
                        displayType={'text'}
                        fixedDecimalScale={true}
                        thousandSeparator={true}
                        prefix={'$'}
                      />      <Text size={'sm'} className="text-xl text-gray-600 font-normal">
                        /{connections.firstWhere('value', price?.period).label}
                      </Text>
                    </div>
                    <p>
                      {item.ShortDescription}
                    </p>
                    <AddToCart item={item} changePrice={changePrice} />

                  </div>
                  <ul className='p-8 space-y-3'>
                    <li className="pb-2 text-gray-800 font-medium">
                      <p>Features</p>
                    </li>
                    {item?.productFeatures.map((feature: any, k: number) => (
                      <div
                        key={k}
                        className="text-gray-700 flex space-x-3 items-center"
                      >
                        <GoCheck color="#34d399" />
                        <TypographyStylesProvider>
                          <div
                            className="text-arapawa-600 "
                            dangerouslySetInnerHTML={{
                              __html: `${feature.label}`,
                            }}
                          />
                        </TypographyStylesProvider>
                        {feature.tdescription && (
                          <Popover
                            width={350}
                            position="bottom"
                            withArrow
                            shadow="md"
                          >
                            <Popover.Target>
                              <ActionIcon>
                                <BsInfoCircle />
                              </ActionIcon>
                            </Popover.Target>
                            <Popover.Dropdown className="p-6 bg-black border-none text-gray-50">
                              <TypographyStylesProvider>
                                <div
                                  className="text-gray-50"
                                  dangerouslySetInnerHTML={{
                                    __html: `${feature.tdescription}`,
                                  }}
                                />
                              </TypographyStylesProvider>
                            </Popover.Dropdown>
                          </Popover>
                        )}
                      </div>
                    ))}

                    {/* {
                      item.features.map((featureItem, idx) => (
                        <li key={idx} className='flex items-center gap-5'>
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                          {featureItem}
                        </li>
                      ))
                    } */}
                  </ul>
                </div>
              )
            })
          }
        </div>
      </Container>
    </section>

  )
}

export default PricingBlock
