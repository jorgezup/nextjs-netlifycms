export default {
  cms_manual_init: true,
  backend: {
    name: 'test-repo',
    repo: 'jorgezup/nextjs-netlifycms',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: 'img',  
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'content/pages/home.md',
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'markdown',
            },
            {
              label: 'Image',
              name: 'image',
              widget: 'image'
            },
          ],
        },
      ],
    },
  ],
};