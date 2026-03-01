import React from 'react'
import { footerLinks } from '../contants'

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>More ways to shop: <a href="#">Find an Apple Store</a> or other retailer near you. Or Call 000800 040 1966</p>
      </div>
      <hr />

      <div className="links">
        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        <ul>
          {footerLinks.map(({label, link}) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer