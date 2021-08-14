export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6117a8f6eb78e8a6a37d0353',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-fpds9mkh',
                  apiId: '6f838c99-4209-4328-9e62-cfc543dec03c'
                },
                {
                  buildHookId: '6117a8f6853bacabd75ffbe0',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-dzofj443',
                  apiId: '006429b3-e94c-410a-9b2b-acb1905c219b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yk-42/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-dzofj443.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
