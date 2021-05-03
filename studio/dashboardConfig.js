export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '608fbecd6e40066d15bc24da',
                  title: 'Sanity Studio',
                  name: 'scf-webb-studio',
                  apiId: 'fab86f47-cd8c-4cd1-8770-9be7a5e58dff'
                },
                {
                  buildHookId: '608fbecd7010f92fbdb80a71',
                  title: 'Landing pages Website',
                  name: 'scf-webb',
                  apiId: '312f8a4a-e3dd-4152-87ef-376afae3a3d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Chabbe/scf-webb',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://scf-webb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
