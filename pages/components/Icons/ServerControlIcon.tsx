import * as React from "react"
import { SVGProps } from "react"

const ServerControlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M1.9 34.7 24 47.5l22.1-12.7-6.7-3.9L24 40 8.4 31l-6.5 3.7Z"
      style={{
        fill: "#cadefe",
        fillRule: "nonzero",
        stroke: "#b2b9ce",
        strokeWidth: 1,
      }}
    />
    <path
      d="M1.9 27.8 24 40.5l22.1-12.7-5.2-3L24 35 7 24.9l-5.1 2.9Z"
      style={{
        fill: "#007bfc",
        fillRule: "nonzero",
        stroke: "#007bfc",
        strokeWidth: 1,
      }}
    />
    <path
      d="m5.6 19.6-3.7 2.1L24 34.4l22.1-12.7-3.7-2.1"
      style={{
        fill: "none",
        fillRule: "nonzero",
        stroke: "#142149",
        strokeWidth: 1,
      }}
    />
    <path
      d="m5.6 15.3-3.7 2.1L24 30.2l22.1-12.7-3.7-2.1"
      style={{
        fill: "none",
        fillRule: "nonzero",
        stroke: "#142149",
        strokeWidth: 1,
      }}
    />
    <path
      d="M1.9 13.2 24 26l22.1-12.7L24 .5 1.9 13.2Z"
      style={{
        fill: "none",
        fillRule: "nonzero",
        stroke: "#142149",
        strokeWidth: 1,
      }}
    />
    <path
      d="M8.922 12.961h22.645v14.777H8.922z"
      style={{
        fill: "#007bfc",
      }}
      transform="matrix(.65648 .3985 -.97894 .54102 31.7 -6.359)"
    />
  </svg>
)

export default ServerControlIcon
