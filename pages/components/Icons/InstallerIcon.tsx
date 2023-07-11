import * as React from 'react'
import { SVGProps } from 'react'

const InstallerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve"
  style={{
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }}
  viewBox="0 0 800 800"
  width="1em"
  height="1em"
  {...props}
>
  <path
    d="M0 0h800v800H0z"
    style={{
      fill: "#fff",
      fillOpacity: 0.01,
    }}
  />
  <path
    d="M690.007 192.517 605.553 83.333h-411.11l-84.71 109.184"
    style={{
      fill: "none",
      fillRule: "nonzero",
      stroke: "#000",
      strokeWidth: 33,
    }}
  />
  <path
    fill="none"
    d="M100 216.667c0-18.41 14.924-33.334 33.333-33.334h533.334c18.41 0 33.333 14.924 33.333 33.334v450c0 27.615-22.385 50-50 50H150c-27.614 0-50-22.385-50-50v-450Z"
    style={{
      fill: "#fff",
      fillOpacity: 0,
      fillRule: "nonzero",
      stroke: "#000",
      strokeWidth: 30,
      strokeLinecap: "butt",
    }}
  />
  <path
    d="M533.333 450 400 583.333 266.667 450M399.862 316.667v266.666"
    style={{
      fill: "none",
      fillRule: "nonzero",
      stroke: "#007bfc",
      strokeWidth: "66.67px",
    }}
  />
</svg>
)

export default InstallerIcon
