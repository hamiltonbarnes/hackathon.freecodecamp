import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>My name is Benedict Barnes, an aspiring frontend developer.Although am not new to programming, my skillset needs
    great improvement. I live in Accra,Ghana and i work as a performance analyst for a telco.</p>
    <p>Am currently a studying with freedcodecamp in other to improve my coding skills and hopefully in a years time i would love to
    work as a full time developer. My study partner and i would love the opportunity to partake in the hackathon</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
