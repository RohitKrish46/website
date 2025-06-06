// import createMDX from '@next/mdx'
 
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
//   async rewrites() {
//     return [
//       {
//         source: '/learning/weekly-reflections/week-:num',
//         destination: '/learning/weekly-reflections/[week]?week=week-:num',
//       },
//     ]
//   },
// }
 
// const withMDX = createMDX({
// })
 
// export default withMDX(nextConfig)

import createMDX from '@next/mdx';

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export', // 👈 Enable static export
  distDir: 'out',
  basePath: isProd ? '/RohitKrish46/website' : '', // 👈 Update this
  assetPrefix: isProd ? '/RohitKrish46/website' : '', // 👈 Update this
  images: {
    unoptimized: true, // 👈 Required for static export
  },
  async rewrites() {
    return [
      {
        source: '/learning/weekly-reflections/week-:num',
        destination: '/learning/weekly-reflections/[week]?week=week-:num',
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
