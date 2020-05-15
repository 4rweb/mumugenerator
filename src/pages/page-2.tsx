// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Divider } from "semantic-ui-react"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Sobre MuMu" />
    <p style={{ fontSize: 30 }}>
      MuMuGenerator é um gerador de mugidos que converte o texto em mugido, o
      idioma oficial dos bolsoloides que vivem defendendo as merdas que o
      governo faz, principalmente o seu lider Jair BolsoAsno! Como essa gente
      não adianta argumentar, então, vamos enviar o texto no idioma que eles
      conhecem bem, Muuuuuuuuuuuuu! <br></br>
      <br></br>
      <small>
        Desenvolvido por <a href="https://twitter.com/4rweb">4RWeb</a>{" "}
      </small>
    </p>
    <Divider />
    <Link to="/">Voltar a mugir</Link>
  </Layout>
)

export default SecondPage
