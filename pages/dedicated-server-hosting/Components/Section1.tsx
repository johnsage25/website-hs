import { Container, Text } from '@mantine/core'
import React from 'react'
import RocketIcon from '../../components/Icons/RocketIcon'
import DataProcessingIcon from '../../components/Icons/DataProcessingIcon'
import SsdSardIcon from '../../components/Icons/SsdSardIcon'
import DdosIcon from '../../components/Icons/DdosIcon'
import VpsIcon from '../../components/Icons/VpsIcon'
import VpsIcon1 from '../../components/Icons/VpsIcon1'
import ApiIcon from '../../components/Icons/ApiIcon'

type Props = {}

const Section1 = (props: Props) => {
  return (
    <section className=" bg-slate-50">
      <Container size={'lg'}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-28">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-16">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              What You Get with Your Dedicated Server
            </h2>
          </div>
          <div className="grid gap-8 row-gap-10 mx-auto lg:grid-cols-3">
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-6">
                <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
                  <RocketIcon className=" w-14 h-14" />
                </div>
              </div>
              <div>
                <h6 className="mb-4 text-xl font-bold leading-6">
                  100% Dedicated Resources for You
                </h6>
                <Text size={16} className="mb-3 text-gray-800">
                  Dedicated servers offer maximum performance with allotted
                  resources and no sharing or stealing, ideal for
                  latency-sensitive apps and workloads with 100% CPU power.
                </Text>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-6">
                <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
                  <DataProcessingIcon className=" w-14 h-14" />
                </div>
              </div>
              <div>
                <h6 className="mb-4 text-xl font-bold leading-6">
                  All the Graphics Power
                </h6>
                <Text size={16} className="mb-3 text-gray-800">
                  Bare metal servers that can be enhanced with dedicated NVIDIA
                  GeForce and Tesla GPUs for high performance, intensive
                  applications such as machine learning algorithm training or
                  crypto mining.
                </Text>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-6">
                <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
                  <SsdSardIcon className=" w-14 h-14" />
                </div>
              </div>
              <div>
                <h6 className="mb-4 text-xl font-bold leading-6">
                  Custom Storage Configuration
                </h6>
                <Text size={16} className="mb-3 text-gray-800">
                  Choose from various HDD, SSD and NVMe SSD options for servers,
                  suitable for gaming, streaming or resource-intensive
                  infrastructures, also available with Hardware RAID 1, RAID 5
                  and RAID 10
                </Text>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-6">
                <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
                  <VpsIcon1 className=" w-14 h-14" />
                </div>
              </div>
              <div>
                <h6 className="mb-4 text-xl font-bold leading-6">
                  Host Your Own Virtual Machines
                </h6>
                <Text size={16} className="mb-3 text-gray-800">
                  Run your own VMs on our bare metal servers with AMD EPYC™, SMT
                  for efficient virtualization, support for most hypervisors,
                  and optional Proxmox VE software.
                </Text>
              </div>
            </div>

            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-6">
                <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
                  <ApiIcon className=" w-14 h-14" />
                </div>
              </div>
              <div>
                <h6 className="mb-4 text-xl font-bold leading-6">
                  Remote Management
                </h6>
                <Text size={16} className="mb-3 text-gray-800">
                  Our dedicated servers come equipped with IPMI/iLO access,
                  allowing you to remotely access, monitor, and control them, as
                  well as receive sensor information.
                </Text>
              </div>
            </div>

            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-6">
                <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
                  <DdosIcon className=" w-14 h-14" />
                </div>
              </div>
              <div>
                <h6 className="mb-4 text-xl font-bold leading-6">
                  Always-On DDoS Protection
                </h6>
                <Text size={16} className="mb-3 text-gray-800">
                  HostSpacing network is safeguarded by always-on DDoS
                  mitigation, which detects and counters DDoS attacks on your
                  infrastructure automatically.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Section1
