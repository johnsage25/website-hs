import * as React from 'react'
import { SVGProps } from 'react'

const OpenVpnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 144 144"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M72 12c-33.135 0-60 26.862-60 60 0 22.179 12.066 41.499 29.961 51.885l13.518-23.349C45.636 94.824 39 84.198 39 72c0-18.225 14.775-33 33-33s33 14.775 33 33c0 12.198-6.636 22.824-16.479 28.536l13.518 23.349C119.934 113.499 132 94.179 132 72c0-33.138-26.865-60-60-60Z"
      style={{
        fill: '#ff9100',
        fillRule: 'nonzero',
      }}
    />
    <path
      d="M90 72c0-9.942-8.061-18-18-18s-18 8.058-18 18c0 7.668 4.803 14.199 11.556 16.791l-7.68 41.466C62.415 131.355 67.128 132 72 132s9.585-.645 14.121-1.74l-7.68-41.466C85.197 86.199 90 79.668 90 72Z"
      style={{
        fill: '#1a237e',
        fillRule: 'nonzero',
      }}
    />
  </svg>
)

export default OpenVpnIcon
