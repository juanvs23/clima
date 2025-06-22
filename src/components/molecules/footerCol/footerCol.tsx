import { LinkItem } from '@/src/types/constants'
import React from 'react'
import FooterLink from '../../atoms/footerLink'


export default  function FooterCol({title,groupLinks}:{title:string,groupLinks:LinkItem[]}) {
  return (
    <div className="space-y-4">
    <h3 className="text-lg font-bold">{title}</h3>
    <ul className="space-y-2">
      {groupLinks.map((link,index) => (
        <FooterLink key={index} {...link} />
      ))}
    </ul>
  </div>
  )
}
