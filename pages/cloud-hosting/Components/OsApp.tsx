import { Container, Tabs, Text } from '@mantine/core'
import React from 'react'
import OsList from '../Widgets/OsList'
import UbuntuIcon from '../../components/Icons/UbuntuIcon'
import FedoraIcon from '../../components/Icons/FedoraIcon'
import CentOSIcon from '../../components/Icons/CentOSIcon'
import DebianIcon from '../../components/Icons/DebianIcon'
import OpenSuseIcon from '../../components/Icons/OpenSuseIcon'
import CloudLinuxIcon from '../../components/Icons/CloudLinuxIcon'
import WindowsIcon from '../../components/Icons/WindowsIcon'
import OpenVpnIcon from '../../components/Icons/OpenVpnIcon'
import PleskIcon from '../../components/Icons/PleskIcon'
import PleskIcon2 from '../../components/Icons/PleskIcon2'
import RedisIcon from '../../components/Icons/RedisIcon'
import OwncastIcon from '../../components/Icons/OwncastIcon'
import NodejsIcon from '../../components/Icons/NodejsIcon'
import CpanelIcon from '../../components/Icons/CpanelIcon'
import CpanelIcon2 from '../../components/Icons/CpanelIcon2'
import CloudronIcon from '../../components/Icons/CloudronIcon'
import Cyberpanelicon from '../../components/Icons/Cyberpanelicon'
import GitlabIcon from '../../components/Icons/GitlabIcon'
import GrafanaIcon from '../../components/Icons/GrafanaIcon'
import JenkinsIcon from '../../components/Icons/JenkinsIcon'
import JoomlaIcon from '../../components/Icons/JoomlaIcon'
import WordpressIcon from '../../components/Icons/WordpressIcon'
import KeplerbuilderIcon from '../../components/Icons/KeplerbuilderIcon'
import AntMediaServerIcon from '../../components/Icons/AntMediaServerIcon'

type Props = {}

const OsApp = (props: Props) => {
  return (
    <section>
      <Container size={'lg'}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Operating systems and cloud applications
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              For your virtual private server, determine the best operating
              system.
            </p>
          </div>

          <Tabs color="blue" defaultValue="os">
            <Tabs.List position="center">
              <Tabs.Tab value="os">
                <Text size={18} fw={600} className=" text-gray-600">
                  Operation Systems
                </Text>
              </Tabs.Tab>
              <Tabs.Tab value="app" color="blue">
                <Text size={18} fw={600} className=" text-gray-600">
                  Applications
                </Text>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="os" className="py-8">
              <Container>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <Text className="text-base text-gray-600 md:text-md">
                    There are many different operating systems available for you
                    to pick from. A cloud server with any required operating
                    system can be online in a matter of seconds.
                  </Text>
                </div>

                <OsList
                  data={[
                    {
                      name: 'Ubuntu',
                      image: UbuntuIcon,
                    },
                    {
                      name: 'Fedora',
                      image: FedoraIcon,
                    },
                    { name: 'CentOS', image: CentOSIcon },
                    { name: 'Debian', image: DebianIcon },
                    { name: 'Windows', image: WindowsIcon },
                    { name: 'OpenSuse', image: OpenSuseIcon },
                    { name: 'Cloud Linux', image: CloudLinuxIcon },
                  ]}
                />
              </Container>
            </Tabs.Panel>

            <Tabs.Panel value="app" className="py-8">
              <Container>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <Text className="text-base text-gray-600 md:text-md">
                    A collection of typical cloud applications has been created
                    by us. Use any of our pre-configured applications to start a
                    cloud server. Avoid wasting time on configuration. For you,
                    we already completed the task.
                  </Text>
                </div>

                <div>
                  <OsList
                    data={[
                      {
                        name: 'OpenVPN',
                        image: OpenVpnIcon,
                      },
                      {
                        name: 'Plesk',
                        image: PleskIcon2,
                      },
                      { name: 'Redis', image: RedisIcon },
                      { name: 'Owncast', image: OwncastIcon },
                      { name: 'Nodejs', image: NodejsIcon },
                      { name: 'Gitlab', image: GitlabIcon },
                      { name: 'CPanel', image: CpanelIcon2 },
                      { name: 'Cloudron', image: CloudronIcon },
                      { name: 'Cyberpane', image: Cyberpanelicon },
                      { name: 'Jenkins', image: JenkinsIcon },
                      { name: 'Joomla', image: JoomlaIcon },
                      { name: 'Wordpress', image: WordpressIcon },
                      { name: 'Kepler Builder', image: KeplerbuilderIcon },
                      { name: 'Ant Media', image: AntMediaServerIcon },
                    ]}
                  />
                </div>
              </Container>
            </Tabs.Panel>
          </Tabs>
        </div>
      </Container>
    </section>
  )
}

export default OsApp
