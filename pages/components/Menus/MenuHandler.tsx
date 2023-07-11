import React from 'react'
import HostingMenu from './HostingMenu'
import { useScrollLock } from '@mantine/hooks'
import DomainMenu from './DomainMenu'
import Partnership from './Partnership'
import CommunityMenu from './CommunityMenu'
import Pricing from './Pricing'

type Props = {
  selected: number
}

const MenuHandler = ({ selected }: Props) => {
  const [scrollLocked, setScrollLocked] = useScrollLock()
  switch (selected) {
    case 1:
      return (
        <div>
          <HostingMenu
            onClick={(state) => {
              setScrollLocked(!state)
            }}
          />
        </div>
      )
    case 2:
      return (
        <DomainMenu
          onClick={(state) => {
            setScrollLocked(!state)
          }}
        />
      )
    case 3:
      return (
        <Partnership
          onClick={(state) => {
            setScrollLocked(!state)
          }}
        />
      )

    case 4:
      return (
        <CommunityMenu
          onClick={(state) => {
            setScrollLocked(!state)
          }}
        />
      )
    case 5:
      return (
        <Pricing
          onClick={(state) => {
            setScrollLocked(!state)
          }}
        />
      )
    default:
      return <></>
  }
}

export default MenuHandler
