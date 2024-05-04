/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  softwareSidebar: [
    {
      type: 'doc', 
      id: 'software/unix-v1',
      label: '重现第一代Unix系统'
    },
    {
      type: 'doc',
      id: 'software/legacy-cc',
      label: '第一代C语言编译器'
    }
  ],
  documentSidebar: [{type: 'autogenerated', dirName: 'document'}],
  imagesSidebar: [{type: 'autogenerated', dirName: 'images'}],
};

export default sidebars;
