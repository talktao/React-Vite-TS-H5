// 自动化导入路由
const pageRouterModules = import.meta.globEager('../pages/*/*.tsx');

export const routes = Object.keys(pageRouterModules).map((path: any) => {
    const name = path.match(/\.\.\/pages\/(.*)\/index.tsx$/)[1];

    return {
        path: `/${name.toLowerCase()}`,
        component: pageRouterModules[path].default
    };
});

