import { Container, Text } from '@mantine/core'
import React from 'react'
import SSLFeature from '../../components/Icons/SSLFeature'
import InstallerIcon from '../../components/Icons/InstallerIcon'
import SecurityIcon from '../../components/Icons/SecurityIcon'
import BackupIcon from '../../components/Icons/BackupIcon'
import InstallerIcon2 from '../../components/Icons/InstallerIcon2'
import VolumeIcon from '../../components/Icons/VolumeIcon'
import BandwidthIcon from '../../components/Icons/BandwidthIcon'
import DomainNameIcon from '../../components/Icons/DomainNameIcon'
import DatabaseIcon2 from '../../components/Icons/DatabaseIcon2'
import CertificateIcon from '../../components/Icons/CertificateIcon'
import FreeDomainIcon from '../../components/Icons/FreeDomainIcon'
import BackupIcon2 from '../../components/Icons/BackupIcon2'
import BackupIcon3 from '../../components/Icons/BackupIcon3'
import SupportIcon2 from '../../components/Icons/SupportIcon2'
import DdosIcon2 from '../../components/Icons/DdosIcon2'

type Props = {}

const FeaturesBlock = (props: Props) => {

  const features = [
    {
      icon: VolumeIcon,
      title: "Unlimited disk space",
      desc: "All the storage you need to build and grow your website."
    },
    {
      icon: BandwidthIcon,
      title: "Scalable bandwidth",
      desc: "We enforce no hard limits on data transfer for your website."
    },
    {
      icon: DomainNameIcon,
      title: "Unlimited domain names",
      desc: "Host as many different domains as you’d like under one account."
    },
    {
      icon: DatabaseIcon2,
      title: "Unlimited MySQL databases",
      desc: "Create as many databases as you need for all of your hosted websites."
    },
    {
      icon: CertificateIcon,
      title: "Free SSL certificate",
      desc: "Ensure properly-encrypted data to conduct eCommerce and more."
    },
    {
      icon: FreeDomainIcon,
      title: "Free domain for 1 year*",
      desc: "A one-year domain registration is included with each new account."
    },
    {
      icon: BackupIcon3,
      title: "Daily Backups",
      desc: " We run daily backups to secure your content."
    },
    {
      icon: SupportIcon2,
      title: "Round-the-clock Support",
      desc: " We work relentlessly so that your website stays functional 24/7/365."
    },
    {
      icon: DdosIcon2,
      title: "DDoS protection",
      desc: " DDoS protection secures your website, keeping you online and protected."
    },
  ]



  return (
    <>

      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative max-w-2xl mx-auto sm:text-center">
            <div className="relative z-10">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Services included to help your projects succeed
              </h3>

            </div>
            {/* <div className="absolute inset-0 z-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgb(59 130 246 / 0.5) 4.54%, rgb(59 130 246 / 0.5) 34.2%, rgb(59 130 246 / 11%) 77.55%)" }}></div> */}
          </div>
          <div className="px-5 py-8 mt-12 shadow-sm bg-white border lg:mt-20 lg:p-16 relative z-10">
            <div className="grid grid-cols-1  gap-10 lg:gap-16 sm:grid-cols-3">
              {features.flatMap((item, key) => {
                return (
                  <div className="flex items-start">

                    <item.icon className="flex-shrink-0 w-10 h-10 opacity-70" />

                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-black">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}


            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default FeaturesBlock
