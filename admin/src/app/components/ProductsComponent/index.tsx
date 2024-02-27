import React from 'react'
import PageHeader from '../PageHeader'
import PageLayout from '../pageLayout'

const ProductsComponent = () => {
    
  return (
    <PageLayout>
    <PageHeader pageTitle='Products Page' showAddButton={true} addRouter={'/users/products'} />
    <div className='m-3 justify-between'>
  
    </div>
    
        </PageLayout>
  )
}

export default ProductsComponent