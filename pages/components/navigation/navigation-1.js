import React from 'react'
import HeaderNav from '../../data/header-data'
import Link from 'next/link'
import MetisMenu from '@metismenu/react';
import 'metismenujs/dist/metismenujs.css';

const NagigationOne = () => {
  return (
    <React.Fragment>
        <ul>
            {
                HeaderNav && HeaderNav.map((item, id) => {
                    return(
                        <MetisMenu key={id}>
                            <li><Link  className={item.hasChild ? 'has-arrow': ''} href={`${item.slug}`}>{item.title}</Link>
                            {
                                item.childItems && (
                                    <ul className='submenu'>
                                        {item.childItems.map((item, id) => (
                                            <li key={id}><Link href={item.slug}>{item.title}</Link></li>
                                        ))}
                                    </ul>
                                )
                            }
                            </li>
                        </MetisMenu>
                    )
                })
            }
        </ul>
    </React.Fragment>
  )
}
export default NagigationOne