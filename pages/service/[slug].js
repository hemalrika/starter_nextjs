import Image from 'next/image';
import React from 'react';
import Breadcrumb from '../components/breakcrumb/breadcrumb';
import Seo from '../seo/seo';
import DetailsError from '../components/error/details-error';
import { useRouter } from 'next/router'
const Slug = ({serviceDetails}) => {
  const router = useRouter()
  if(serviceDetails) {
    serviceDetails = JSON.parse(serviceDetails)
  }
  return (
    <React.Fragment>
      <Breadcrumb title={serviceDetails.name ? serviceDetails.name: 'No Service Found'} />
      <Seo title={serviceDetails.name ? serviceDetails.name: 'No Service Found'} />
      {
        serviceDetails && (
          <div className='container'>
            <div className='service-details'>
              <div className='service-img'>
                <img src={serviceDetails.img} />
              </div>
              <div className='service-content'>
                <h4>{serviceDetails.title}</h4>
                <div dangerouslySetInnerHTML={{ __html: serviceDetails.content }} />
              </div>
            </div>
          </div>
        )
      }
      {
        !serviceDetails && <DetailsError title={'NO Posts Are Found'}/>
      }
    </React.Fragment>
  )
}

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  const fs = require('fs');
  let serviceDetails;
  try {
    serviceDetails = await fs.promises.readFile(`pages/data/service/${slug}.json`, 'utf-8');
  } catch {
    serviceDetails = '';
  }
  
  return {
    props: {
      serviceDetails: serviceDetails
    }, // will be passed to the page component as props
  }
}

export default Slug