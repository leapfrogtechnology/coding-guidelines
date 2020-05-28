
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/classes',
  component: ComponentCreator('/docs/classes'),
  exact: true,
  
},
{
  path: '/docs/constants',
  component: ComponentCreator('/docs/constants'),
  exact: true,
  
},
{
  path: '/docs/files',
  component: ComponentCreator('/docs/files'),
  exact: true,
  
},
{
  path: '/docs/folders',
  component: ComponentCreator('/docs/folders'),
  exact: true,
  
},
{
  path: '/docs/functions',
  component: ComponentCreator('/docs/functions'),
  exact: true,
  
},
{
  path: '/docs/git/branching_naming_convention',
  component: ComponentCreator('/docs/git/branching_naming_convention'),
  exact: true,
  
},
{
  path: '/docs/git/branching_strategy',
  component: ComponentCreator('/docs/git/branching_strategy'),
  exact: true,
  
},
{
  path: '/docs/git/code_reviewe_checklist',
  component: ComponentCreator('/docs/git/code_reviewe_checklist'),
  exact: true,
  
},
{
  path: '/docs/git/pull_request_best_pratices',
  component: ComponentCreator('/docs/git/pull_request_best_pratices'),
  exact: true,
  
},
{
  path: '/docs/git/smart_commit',
  component: ComponentCreator('/docs/git/smart_commit'),
  exact: true,
  
},
{
  path: '/docs/git/tagging',
  component: ComponentCreator('/docs/git/tagging'),
  exact: true,
  
},
{
  path: '/docs/introduction',
  component: ComponentCreator('/docs/introduction'),
  exact: true,
  
},
{
  path: '/docs/variables',
  component: ComponentCreator('/docs/variables'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
