import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import * as _ from "lodash"

const Price = ({ pricing, lang }) => {
  let { currency, price, unit } = pricing
  price = parseInt(price).toLocaleString(lang || "id")

  return (
    <small>
      <b>
        {currency} {price}
      </b>{" "}
      / {unit}
    </small>
  )
}

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: products } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Products</h1>
          </div>
          {products.map(({ node: product }) => (
            <div
              className="content"
              style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
              key={product.id}
            >
              <p>
                <Link className="has-text-primary" to={product.fields.slug}>
                  {product.frontmatter.title}
                </Link>
                <span> &bull; </span>

                <Price pricing={product.frontmatter.pricing} />
              </p>
              <p>
                Write Something here
                <br />
                <br />
                <Link className="button is-small" to={product.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "catalog-product" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            gallery {
              image
            }
            pricing {
              currency
              price
              unit
            }
          }
        }
      }
    }
  }
`
