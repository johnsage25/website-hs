import {
  createStyles,
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  ScrollArea,
  Container,
  Button,
} from '@mantine/core'
import CurrencyFormat from 'react-currency-format'

const useStyles = createStyles((theme) => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `3px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
    },
  },
}))

interface TableReviewsProps {
  data: {
    ram: string
    cpu: string
    productId: string
    networkIn: string
    networkOut: string
    storage: string
    price: number
  }[]
}

export function PricingTable({ data }: TableReviewsProps) {
  const { classes, theme } = useStyles()

  const rows = data.map((row, k) => {
    return (
      <tr
        key={k}
        className="bg-white border-b border-b-slate-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <Text fw={600} className=" text-dodger-blue-600">
            {row.ram}
          </Text>
        </th>
        <td className="px-6 py-4">
          <Text fw={600} className=" text-gray-700">
            {row.cpu}
          </Text>
        </td>
        <td className="px-6 py-4">
          <Text fw={600} className=" text-gray-700">
            {row.networkIn}
          </Text>
        </td>
        <td className="px-6 py-4">
          <Text fw={600} className=" text-gray-700">
            {row.networkOut}
          </Text>
        </td>
        <td className="px-6 py-4">
          <Text fw={600} className=" text-gray-700">
            {row.storage}
          </Text>
        </td>
        <td className="px-6 py-4">
          <Text fw={600} className=" text-gray-700">
            <CurrencyFormat
              value={row.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </Text>
        </td>
        <td className="px-6 py-4">
          <Group position="right">
            <Button
              component="a"
              href={row.productId}
              radius={'xl'}
              className=" bg-dodger-blue-500 text-white"
            >
              Configure
            </Button>
          </Group>
        </td>
      </tr>
    )
  })

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              RAM
            </th>
            <th scope="col" className="px-6 py-3">
              CPU
            </th>

            <th scope="col" className="px-6 py-3">
              Network In
            </th>

            <th scope="col" className="px-6 py-3">
              Network Out
            </th>
            <th scope="col" className="px-6 py-3">
              Storage
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}
