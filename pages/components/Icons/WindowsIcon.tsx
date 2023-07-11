import * as React from "react"
import { SVGProps } from "react"

const WindowsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={256} cy={256} fill="#00BCF2" r={256} />
    <g fill="#FFF">
      <path d="M206.4 248.9V132.6l-107 21.1v96.2zM220.5 263.1v119L392.6 416V264.7zM220.5 248.8l172.1-1.5V96l-172.1 33.9zM206.4 262.9l-107-1v96.4l107 21.1z" />
    </g>
  </svg>
)

export default WindowsIcon
