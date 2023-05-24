import React from 'react'
import Banner_user_dash from './Banner_user_dash'
import Head_cos from '../share/Head_cos'

const User_dash_main = () => {
  return (
    <div>
        
    <Head_cos />
  <div className="cart_main_banner">
    <div className="cart_main_banner_container">
      <Banner_user_dash />
    </div>
  </div>
</div>
  )
}

export default User_dash_main