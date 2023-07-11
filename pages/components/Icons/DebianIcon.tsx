import * as React from 'react'
import { SVGProps } from 'react'

const DebianIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
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
      d="M512 256c0 141.385-114.615 256-256 256S0 397.385 0 256 114.615 0 256 0s256 114.615 256 256Z"
      style={{
        fill: '#d70751',
        fillRule: 'nonzero',
      }}
    />
    <path
      d="M362.379 231.162c.347 9.309-2.716 13.833-5.487 21.832l-4.982 2.478c-4.073 7.914.404 5.024-2.512 11.316-6.366 5.653-19.289 17.683-23.428 18.785-3.025-.066 2.046-3.568 2.709-4.936-8.512 5.841-6.832 8.77-19.852 12.326l-.377-.851c-32.097 15.104-76.687-14.824-76.101-55.652-.339 2.589-.975 1.942-1.684 2.982-1.657-21.004 9.703-42.1 28.861-50.727 18.738-9.271 40.705-5.472 54.118 7.047-7.367-9.656-22.044-19.894-39.426-18.946-17.035.278-32.976 11.101-38.293 22.857-8.724 5.491-9.741 21.178-13.54 24.052-5.121 37.607 9.621 53.848 34.563 72.964 3.915 2.643 1.102 3.048 1.626 5.059-8.284-3.876-15.868-9.733-22.109-16.904 3.313 4.844 6.885 9.553 11.505 13.252-7.818-2.64-18.256-18.931-21.297-19.594 13.467 24.113 54.631 42.289 76.197 33.269-9.979.37-22.653.204-33.858-3.938-4.72-2.424-11.112-7.437-9.968-8.373 29.423 10.985 59.809 8.315 85.264-12.088 6.481-5.048 13.555-13.629 15.601-13.744-3.078 4.631.528 2.227-1.838 6.315 6.443-10.407-2.809-4.238 6.666-17.971l3.499 4.816c-1.31-8.646 10.731-19.135 9.506-32.798 2.763-4.177 3.079 4.5.15 14.11 4.065-10.661 1.075-12.376 2.116-21.177 1.121 2.959 2.612 6.1 3.371 9.225-2.651-10.308 2.709-17.351 4.042-23.343-1.318-.578-4.088 4.555-4.728-7.614.096-5.286 1.476-2.77 2.004-4.073-1.033-.597-3.757-4.65-5.41-12.422 1.191-1.831 3.206 4.735 4.84 5.001-1.052-6.177-2.859-10.889-2.936-15.632-4.779-9.98-1.692 1.333-5.561-4.285-5.086-15.852 4.216-3.68 4.848-10.878 7.699 11.155 12.087 28.456 14.11 35.619-1.541-8.735-4.027-17.2-7.067-25.388 2.347.99-3.772-17.968 3.048-5.414-7.278-26.761-31.126-51.768-53.07-63.497 2.678 2.454 6.065 5.537 4.855 6.022-10.92-6.492-9.001-7.005-10.565-9.748-8.882-3.618-9.475.297-15.352.008-16.761-8.893-19.99-7.949-35.414-13.513l.701 3.283c-11.101-3.699-12.935 1.394-24.93.008-.728-.567 3.845-2.066 7.614-2.609-10.735 1.418-10.234-2.119-20.738.389 2.585-1.815 5.329-3.021 8.088-4.562-8.751.532-20.9 5.094-17.151.94-14.276 6.373-39.634 15.317-53.864 28.66l-.447-2.99c-6.519 7.826-28.433 23.374-30.178 33.519l-1.746.405c-3.386 5.745-5.586 12.253-8.276 18.16-4.435 7.564-6.504 2.913-5.872 4.1-8.728 17.694-13.07 32.559-16.812 44.758 2.667 3.989.066 24.014 1.071 40.039-4.377 79.16 55.556 156.012 121.068 173.752 9.602 3.441 23.878 3.318 36.023 3.657-14.326-4.1-16.176-2.169-30.14-7.036-10.068-4.747-12.272-10.161-19.408-16.353l2.824 4.99c-13.987-4.951-8.133-6.127-19.516-9.729l3.017-3.934c-4.535-.347-12.01-7.637-14.052-11.687l-4.964.196c-5.957-7.344-9.135-12.65-8.9-16.761l-1.603 2.859c-1.815-3.117-21.929-27.581-11.495-21.886-1.938-1.765-4.516-2.879-7.309-7.961l2.123-2.424c-5.013-6.461-9.24-14.742-8.916-17.501 2.678 3.614 4.535 4.293 6.377 4.913-12.681-31.457-13.394-1.73-22.992-32.02l2.027-.162c-1.553-2.354-2.505-4.893-3.753-7.394l.886-8.805c-9.125-10.542-2.551-44.87-1.229-63.693.905-7.653 7.618-15.802 12.715-28.583l-3.105-.532c5.941-10.357 33.916-41.611 46.878-40.008 6.277-7.883-1.249-.03-2.478-2.011 13.791-14.268 18.125-10.08 27.431-12.65 10.03-5.953-8.612 2.327-3.857-2.27 17.351-4.427 12.292-10.072 34.921-12.318 2.389 1.356-5.537 2.096-7.525 3.857 14.45-7.075 45.734-5.46 66.063 3.922 23.57 11.024 50.069 43.595 51.117 74.24l1.19.32c-.601 12.184 1.865 26.275-2.416 39.214l2.894-6.131"
      style={{
        fill: '#fff',
        fillRule: 'nonzero',
      }}
    />
  </svg>
)

export default DebianIcon