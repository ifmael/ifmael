import React from "react"
import { css } from '@emotion/core'
import { Link } from "gatsby"

const styleItem = css`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
const noMarginLeft = css`
  margin-left: 0;
`
const MenuItem = ({ name, url, internal, position }) => (
  internal === true
                ? <Link css={ [styleItem, (position === 0 && noMarginLeft) ] } to={ url }>{ name }</Link>
                : <a css={ styleItem } href={ url }>{ name }</a>
)

export default MenuItem
