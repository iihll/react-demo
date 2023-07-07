import { Table } from 'antd'
import React from 'react'
import { useAntdTable } from 'ahooks'

interface Item {
  name: {
    last: string
  }
  email: string
  phone: string
  gender: 'male' | 'female'
}

interface Result {
  total: number
  list: Item[]
}

async function getTableData({ current, pageSize }: { current: number; pageSize: number }): Promise<Result> {
  const query = `page=${current}&size=${pageSize}`

  const res = await fetch(`https://randomuser.me/api?results=55&${query}`)
  const json = await res.json()
  return ({
    total: json.info.results,
    list: json.results,
  })
}

const Home: React.FC = () => {
  const { tableProps } = useAntdTable(getTableData)

  const columns = [
    {
      title: 'name',
      dataIndex: ['name', 'last'],
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
  ]

  return <Table columns={columns} rowKey="email" {...tableProps} />
}

export default Home
