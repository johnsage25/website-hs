import * as React from "react"
import { SVGProps } from "react"

const BGObject = (props: SVGProps<SVGSVGElement>) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={560}
    preserveAspectRatio="none"
    {...props}
  >
    <g mask='url("#a")' fill="rgba(226, 232, 240, 0.79)">
      <path
        d="m819.181 105.929-98.29 76.642 100.293 42.572z"
        className="triangle-float2"
      />
      <path
        d="m1301.381 64.623 68.573 134.9 73.973-109.67zM1249.428 421.589l-23.898 83.341 136.96-5.824z"
        className="triangle-float1"
      />
      <path
        d="m1080.818 524.954 108.863 5.81-41.776-85.654z"
        className="triangle-float2"
      />
      <path
        d="m449.977 275.186-34.367 105.77 105.77 34.368 34.368-105.771zM208.054 372.909l-109.86-92.183-92.182 109.86 109.86 92.182z"
        className="triangle-float3"
      />
    </g>
    <defs>
      <mask id="a">
        <path fill="#fff" d="M0 0h1440v560H0z" />
      </mask>
    </defs>
  </svg>
)

export default BGObject
