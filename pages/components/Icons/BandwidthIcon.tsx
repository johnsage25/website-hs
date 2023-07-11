import * as React from "react"
import { SVGProps } from "react"
const BandwidthIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 1 1"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M.5 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 .922a.422.422 0 1 1 0-.844.422.422 0 0 1 0 .844Z"
      style={{
        fillRule: "nonzero",
      }}
    />
    <path
      d="M.684.331.638.374C.67.408.688.453.688.5A.19.19 0 0 1 .5.688a.187.187 0 0 1 0-.375V.25a.25.25 0 1 0 .184.081Z"
      style={{
        fill: "#007bfc",
        fillRule: "nonzero",
      }}
    />
    <path
      d="M.531.512.6.271.469.488l.015.043.047-.019Z"
      style={{
        fillRule: "nonzero",
      }}
    />
  </svg>
)
export default BandwidthIcon
