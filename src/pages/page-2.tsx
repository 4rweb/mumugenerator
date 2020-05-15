// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Mugu" />
    <p style={{fontSize: 30}}>MuguGenerator é um gerador de mugidos que converte o texto em mugido, o idioma oficial do bolsoloides que vivem defendendo as merdas que o governo faz, principalmente o lider Jair BolsoAsno! Como essa gente não adianta argumentar, então talvez enviar algo no seu idioma original!</p>
    <Link to="/">Voltar a mugir</Link>
  </Layout>
)

export default SecondPage
