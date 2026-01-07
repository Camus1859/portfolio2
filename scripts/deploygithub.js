const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Camus1859/portfolio2.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)