import { Button, Container, Image, Text, Title } from '@mantine/core'
import React from 'react'
import SSLFeature from '../../components/Icons/SSLFeature'
import InstallerIcon from '../../components/Icons/InstallerIcon'
import SecurityIcon from '../../components/Icons/SecurityIcon'
import BackupIcon from '../../components/Icons/BackupIcon'
import { truncate } from 'lodash'
import CurrencyFormat from 'react-currency-format';


function percDiff(etalon:number, sell:number) {
  return  100 * Math.abs( (etalon - sell) / ( (etalon+sell)/2 ) )
}

const DomainFeatures = (props: any) => {
  console.log(props);

  return (
    <section className="py-8 bg-zinc-100">
      <Container size={"xl"}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-36 lg:px-20 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-arapawa-600 sm:text-4xl md:mx-auto">
              Buy a Domain In Minutes
            </h2>
            <p className="text-base text-arapawa-700  md:text-lg">
              Find the ideal domain that instantly conveys your purpose and excellence. Use the domain search tool for more attention and visitors.
            </p>
          </div>
          <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {props?.tldfeatures?.tldlist.map((item: any) => (

              <div key={item._id} className="flex flex-col bg-white shadow-sm justify-between px-8 py-6 space-y-4 rounded">

                <div className=' lg:h-40'>
                  <Image className=' mb-4' width={150} src={`${props.PICKER_BUCKET_URI}/${item.logo}`} alt='tld-logo' title={item.name} />

                  <Text className="mb-3 text-arapawa-700 ">
                    {truncate(item.description, {
                      length: 100,
                      omission: '..'
                    })}
                  </Text>
                </div>
                    {/* {percDiff(item?.tld[0].registerPrice, item?.tld[0].promoRegisterPrice)} */}
                <div>
                  <div className='flex items-baseline'>
                    <Title
                    size={26}
                      className='text-arapawa-600' order={1}>
                      <CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={item?.tld[0].promo ? item?.tld[0].promoRegisterPrice : item?.tld[0].registerPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </Title>
                    <Text fw={700} className='text-arapawa-500'   size={'md'}>/Yr</Text>
                  </div>
                  <div>
                    <Text size={'md'} className=' text-arapawa-400'>Instead of <CurrencyFormat value={item?.tld[0].renewPrice} displayType={'text'} suffix="/yr" thousandSeparator={true} prefix={'$'} /></Text>
                  </div>
                </div>

                <div className=' py-6'>
                  <Button variant="outline" radius={"xl"} size='md' fullWidth>Register</Button>
                </div>

              </div>

            ))}
          </div>
        </div>
      </Container>

    </section>
  )
}

export default DomainFeatures
