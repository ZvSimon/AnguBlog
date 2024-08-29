export const headerData = {
  items: [
    {
      label: 'Home',
      url: '/',
      template:'logoTemplate'
    },
    {
      label: 'Github Repo',
      icon: 'pi pi-star',
      url: 'https://github.com/ZvSimon/AnguBlog',
    },
    {
      label: 'Blogs',
      icon: 'pi pi-search',
      items: [
        {
          label: 'Components',
          icon: 'pi pi-bolt',
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server',
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil',
        },
        {
          label: 'Templates',
          icon: 'pi pi-palette',
          items: [
            {
              label: 'Apollo',
              icon: 'pi pi-palette',
            },
            {
              label: 'Ultima',
              icon: 'pi pi-palette',
            },
          ],
        },
      ],
    },
  ],
};
