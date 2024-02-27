import React from 'react'
import PageHeader from '../PageHeader'
import PageLayout from '../pageLayout'

const ReportComponent = () => {
  return (
    <PageLayout>
    <PageHeader pageTitle='Reports Page' showAddButton={true} addRouter={'/users/reports'} />
    <div className='m-3 justify-between'>
  
    </div>
    
        </PageLayout>
  )
}

export default ReportComponent