import React from 'react'

export default function Topbar() {
  return (
    <div>
      <div className="header-img">
        <img src="../../../public/image/top-mobile.jpg" alt="khoshkel khanom" />
      </div>
      <div className="nabar">
        <div className="navbar-left">online shop name </div>
        <div className="navbar-center">
          <ul>
            <li>all products</li>
            <li>product 1</li>
            <li>product 2</li>
            <li>product 3</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
