import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({data}) => {
  return (
    <main>
    <h1>Mon carnet de visitee</h1>
    <h2>Numérique pour toutes</h2>
    <StaticImage src="../images/brand.jpg" alt="Numérique pour toutess" />
    
    </main>
  )
}

export default IndexPage;