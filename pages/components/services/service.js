import Link from 'next/link';
import React, { useEffect } from 'react'
import { useState } from 'react'

const service = (props) => {
  const [serviceList, setserviceList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/servicelist')
      .then((res, err) => res.json())
      .then((i) => {
        setserviceList(i)
      })
  }, []);
  let services = serviceList[Object.keys(serviceList)];
  let allServiceList = [];
  if(services) {
    for(let i=0;i<services.length;i++) {
      allServiceList.push(Object.values(services)[i]);
    }
  }
  return (
    <div>
      {
        allServiceList && allServiceList.map((item, id) => {
          return(
            <div key={id}>
              <h1>Name: <Link href={`service/${item.slug}`}>{item.name}</Link></h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default service