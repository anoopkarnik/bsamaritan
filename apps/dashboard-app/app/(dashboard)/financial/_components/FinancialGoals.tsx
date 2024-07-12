'use client'

import React, { useContext } from 'react'
import { ConnectionsContext } from '../../../../providers/connections-provider'
import NotionTable from './NotionTable'

const FinancialGoals = ({showFilters}:any) => {
    const connectionsContext = useContext(ConnectionsContext)
    const dbId = connectionsContext?.notionNode?.financialGoalsDb?.id

  return (
    <div className='flex flex-col w-[95%] mx-[2.5%] '>
        <NotionTable showFilters={showFilters} dbId={dbId}/>
    </div>
  )
}

export default FinancialGoals