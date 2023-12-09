import { Banner } from 'payload/components'
import React from 'react'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to your dashboard!</h4>
      </Banner>
      Here you will have full control to be able to make changes as you desire. <br /> You will notice the different collections below which act as an interface to allow you to change the minimalistic content of the store such as the store's image banner, product images, descriptions etc.
      Extremely delighted to have you here! <br />
      We wish you a delightful experience.
    </div>
  )
}

export default BeforeDashboard
