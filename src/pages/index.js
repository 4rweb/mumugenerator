import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import muuuuuu from "../images/cow.mp3"
import { Button, Form, TextArea } from "semantic-ui-react"

class IndexPage extends Component {
  state = { mugido: "", submittedMuuuuuu: "" }
  handleChange = (e, { name, value }) => this.setState({ [name]: value }) 
  handleSubmit = () => {
    const { mugido } = this.state
    
    let audio = new Audio(muuuuuu)
    audio.play()

    var mugidoAlto=mugido.toLowerCase();

    console.log("mugidoAlto: ", mugidoAlto)

    var s = mugidoAlto.replace(/[a-z]/g, function(str, p1, p2, offset, s) {
      var translate_table = {
          'a': 'Mu',
          'b': 'Mu',
          'c': 'Mu',
          'd': 'Mu',
          'e': 'Mu',
          'f': 'Mu',
          'g': 'Mu',
          'h': 'Mu',
          'i': 'Mu',
          'j': 'Mu',
          'k': 'Mu',
          'l': 'Mu',
          'm': 'Mu',
          'n': 'Mu',
          'o': 'Mu',
          'p': 'Mu',
          'q': 'Mu',
          'r': 'Mu',
          's': 'Mu',
          't': 'Mu',
          'u': 'Mu',
          'v': 'Mu',
          'w': 'Mu',
          'x': 'Mu',
          'y': 'Mu',
          'z': 'Mu'
      };
      return translate_table[str];
  });

  console.log(s)

  this.setState({ submittedMuuuuuu: s })

  }
  render() {
    const { mugido, submittedMuuuuuu } = this.state
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
        <Link to="/page-2/">Sobre o MuMu</Link>
      </Layout>
    )
  }
}

export default IndexPage
