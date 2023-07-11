import * as React from "react"
import { SVGProps } from "react"

const MagentoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={256} cy={256} fill="#F37B20" r={256} />
    <path
      d="m273.6 374.3-17.6 11-17.7-11V192.1l-45.7 28.6v155.9L256 416l63.9-39.7V220.6L273.6 192v182.3zM255.9 96l-133.3 82v155.9l34.6 20.7V198.7l98.7-61 98.8 60.9.4.2v155.5l34.3-20.5V178L255.9 96z"
      fill="#FFF"
    />
  </svg>
)

export default MagentoIcon
