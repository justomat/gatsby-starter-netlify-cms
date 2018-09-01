import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import Content, { HTMLContent } from "../components/Content"

export const ProductTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  pricing
}) => {
  const ProductContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title} {pricing.currency} {pricing.price}
            </h1>
            <p>{description}</p>
            <ProductContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

ProductTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
  pricing: PropTypes.object
}

const Product = ({ data }) => {
  const { markdownRemark: product } = data

  return (
    <ProductTemplate
      content={product.html}
      contentComponent={HTMLContent}
      description={product.frontmatter.description}
      helmet={<Helmet title={`${product.frontmatter.title} | Blog`} />}
      tags={product.frontmatter.tags}
      title={product.frontmatter.title}
      pricing={product.frontmatter.pricing}
    />
  )
}

Product.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default Product

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
        pricing {
          currency
          price
        }
      }
    }
  }
`
