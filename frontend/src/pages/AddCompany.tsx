import React from 'react'
import CompanyForm from '../componnents/forms/CompanyForm'
import Layout from '../componnents/layout/Layout'

const AddCompany = () => {
  return (
    <Layout>
        <div className='section-admin' >
            <CompanyForm/>
        </div>
    </Layout>
  )
}

export default AddCompany