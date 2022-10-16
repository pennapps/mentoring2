const path = require(`path`)
const fetch = require('node-fetch')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve(`src/components/GuidePage.js`)

  const pages = ['Android', 'Chrome DevTools', 'Text Editors', 'Git & Github', 'iOS', 'Java & OOP', 'JQuery', 'Node js', 'Python', 'Web Design']

  const fetchData = async (page) => {
    const url = page.toLowerCase().replace(' js', 'js').replace(' & ', '&').replace(' ', '-')
    const text = await fetch(`https://raw.githubusercontent.com/pennapps/guides/main/${page}.md`).then(file => file.text())
    return {url, text, name: page}
  }
  
  const result = []
  for (let page of pages) {
    const data = await fetchData(page)
    result.push(data)
  }

  result.forEach((page) => {
      createPage({
        path: `/${page.url}`,
        component: template,
        context: {text: page.text, name: page.name}
      })
  })
}