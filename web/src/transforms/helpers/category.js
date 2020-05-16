module.exports = transformCategory = (category) => {
  const {slug, title} = category;
  return {
    slug: slug.current,
    title
  }
}

/*

Object {title: Object, slug: Object}
slug:Object {current: "functional-programming"}
current:"functional-programming"
title:Object {en: "Functional Programming", es: "Programación funcional"}
en:"Functional Programming"
es:"Programación funcional"*/