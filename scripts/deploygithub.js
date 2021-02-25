const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'source',
    repo: 'https://github.com/Camus1859/portfolio2.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)