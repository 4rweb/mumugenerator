import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import muuuuuu from "../images/cow.mp3"
import { Button, Form, TextArea, Divider } from "semantic-ui-react"
import copy from "copy-to-clipboard"

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      mugido: "",
      submittedMuuuuuu: "",
      textToCopy: "Copiar",
      btnText: "Copiar",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCopy = this.handleCopy.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      textToCopy: e.target.value,
      btnText: "Copiar",
    })
  }

  handleCopy() {
    copy(this.state.textToCopy)
    this.setState({ btnText: "Copiado!!!" })
  }

  handleChange = (e, { name, value }) =>
    this.setState({
      [name]: value,
      textToCopy: value,
      btnText: "Copiar",
    })

  handleSubmit = () => {
    const { mugido } = this.state

    let audio = new Audio(muuuuuu)
    audio.play()

    var mugidoAlto = mugido.toLowerCase()

    var s = mugidoAlto.replace(/[a-z]/g, function (str, p1, p2, offset, s) {
      var translate_table = {
        a: "Muu",
        b: "Muuu",
        c: "Muu",
        d: "Muuu",
        e: "Muuu",
        f: "Mu",
        g: "Muu",
        h: "Muu",
        i: "Muuu",
        j: "Mu",
        k: "Muu",
        l: "Mu",
        m: "Muu",
        n: "Muu",
        o: "Muuu",
        p: "Mu",
        q: "Muuuu",
        r: "Muu",
        s: "Mu",
        t: "Muuu",
        u: "Mu",
        v: "Muuu",
        w: "Mu",
        x: "Muuu",
        y: "Mu",
        z: "Muuuu",
      }
      return translate_table[str]
    })

    this.setState({ submittedMuuuuuu: s, textToCopy: s })
  }
  render() {
    const { mugido, submittedMuuuuuu, btnText } = this.state
    return (
      <Layout>
        <SEO title="Gerador de mugidos" />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field
            control={TextArea}
            name="mugido"
            className="mugidao"
            value={mugido}
            onChange={this.handleChange}
            placeholder="converta para o idioma do gado..."
          />
          <Form.Field control={Button}>Mugir</Form.Field>
        </Form>
        <pre>{submittedMuuuuuu}</pre>
        <Button
          onClick={this.handleCopy}
          fluid
          disabled={btnText === "Copiado!!!"}
        >
          {btnText}
        </Button>
        <small>
          Copie o texto gerado acima e envie para seu amigo Bolsoloide!
        </small>
        <Divider />
        <Link to="/page-2/">Sobre o MuMu</Link>
      </Layout>
    )
  }
}

export default IndexPage
