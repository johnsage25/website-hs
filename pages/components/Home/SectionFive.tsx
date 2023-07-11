import {
  Box,
  Button,
  Container,
  Group,
  Paper,
  Progress,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import _ from 'lodash'
import React, { useState } from 'react'


const SectionFive = () => {

  const tabItems: any = [{
    title: "Superfast Performance",
    desc: "Our white label reseller hosting servers have SSD storage, unlimited bandwidth, and the latest cloud servers from the top public providers.    "
  }, {
    title: "Free SSL Certificates",
    desc: "We provide SSL certificates for every domain and subdomain, that are installed and renewed automatically for you and your reseller hosting customers."
  },
  {
    title: "Clean Mail Servers",
    desc: "We understand that no one likes spam. Outbound mails from all users sent via MailChannels or SpamExperts, ensuring your mailing reputation is always perfect."
  },
  {
    title: "Automate backups",
    desc: "You work hard on your site, so don’t lose it. All your files are backed up daily, and can be restored with a simple click."
  }
  ]
  const [selectedItem, setSelectedItem] = useState<any>(0)


  return (
    <>
      <section className="py-16 bg-slate-50 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 left-1/2 transform -translate-x-1/2"
        >
          {/* <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" /> */}
          {/* <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[70rem] h-[40rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" /> */}
        </div>
        <Container size={"lg"} className=' relative z-10'>
          <Box className=' flex  items-center'>
            <div className='w-1/2'>

              <Box className={`flex-1 ${_.isEqual(selectedItem, 0) ? "lg:block p-4 rounded-lg bg-slate-200 " : "hidden"}`}>
                <img src="./img/i-feel-happy-inspired-handsome-operator-smiling-standing-equipment.jpg" className="md:max-w-xl sm:rounded-lg" alt="" />
              </Box>

              <Box className={`flex-1 ${_.isEqual(selectedItem, 1) ? "lg:block p-4 rounded-lg bg-slate-200 " : "hidden"}`}>
                <img src="./img/cybersecurity-privacy-ideas-are-used-keep-data-safe-lock-icon-technology-that-protects-internet-personal-information-laptops-virtual-environments.jpg" className="md:max-w-xl sm:rounded-lg" alt="" />
              </Box>

              <Box className={`flex-1 ${_.isEqual(selectedItem, 2) ? "lg:block p-4 rounded-lg bg-slate-200 " : "hidden"}`}>
                <img src="./img/male-accountant-typing-computer-virus-warning-message-found-network-security-concept-warning-message-security.jpg" className="md:max-w-xl sm:rounded-lg" alt="" />
              </Box>

              <Box className={`flex-1 ${_.isEqual(selectedItem, 3) ? "lg:block p-4 rounded-lg bg-slate-200 " : "hidden"}`}>
                <img src="./img/edocuments-enable-paperless-offices-businessman-types-laptop-while-examining-virtual-document-icons.jpg" className="md:max-w-xl sm:rounded-lg" alt="" />
              </Box>

            </div>
            <div className='w-1/2'>
              <div className="px-4 md:px-8">
                <ul role="tablist" className="hidden antialiased max-w-screen-xl mx-auto border-l flex-col gap-y-3 overflow-x-auto text-sm sm:flex">
                  {
                    tabItems.map((item, idx) => (
                      <li key={idx} className={`border-l-2 ${selectedItem == idx ? "border-hscolor-600 text-gray-80 [&button.b-2]:text-hscolor-600" : "border-white text-gray-600"}`}>
                        <button
                          role="tab"
                          aria-selected={selectedItem == idx ? true : false}
                          aria-controls={`tabpanel-${idx + 1}`}
                          className="py-2.5 px-4 rounded-lg duration-150 active:bg-gray-100 font-medium"
                          onClick={() => setSelectedItem(idx)}
                        >
                          <Text fw={600} className={`text-lg text-left b-2 ${selectedItem == idx ? " text-hscolor-700" : ""}`}>
                            {item.title}
                          </Text>
                          <Text size={15} className='text-left'>
                            {item.desc}
                          </Text>
                        </button>
                      </li>
                    ))
                  }
                </ul>
                <div className="relative text-gray-500 sm:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                  <select value={tabItems[selectedItem]} className="p-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-indigo-600"
                    onChange={(e: any) => setSelectedItem(tabItems.indexOf(e.target.value))}
                  >
                    {
                      tabItems.map((item: any, idx: any) => (
                        <option key={idx} idx={idx}>
                          {item.title}
                          {item.desc}
                        </option>
                      ))
                    }
                  </select>
                </div>
              </div>
            </div>
          </Box>
        </Container>
      </section>

    </ >

  )
}

export default SectionFive
