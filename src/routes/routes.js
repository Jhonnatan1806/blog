export const routes = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/blog',
    name: 'Blog',
    children: [
      {
        path: 'blog/design',
        name: 'Design'
      },
      {
        path: 'blog/development',
        name: 'Development'
      }
    ]
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/#subscribe',
    name: 'Subscribe'
  }
]
