import Main from '@/views/Main.vue';

// Do not write pages that are displayed as subpages of the Main component, as follows
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login -log in'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-Page does not exist'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-Insufficient permissions'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-Server error'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// The route shown as a subpage of the Main component but not shown in the left menu is written in the otherRouter
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: ' Personal center', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') }
    ]
};

// Displayed as a subpage of the Main component and the route displayed in the left menu is written in appRouter
export const appRouter = [
    {
        path: '/access',
        icon: 'key',
        name: 'access',
        title: 'dashboard',
        component: Main,
        children: [
            { path: 'index', title: 'Dashboard', name: 'access_index', component: () => import('@/views/access/access.vue') }
        ]
    },
    // {
    //     path: '/access-test',
    //     icon: 'lock-combination',
    //     title: 'Permission test page',
    //     name: 'accesstest',
    //     access: 0,
    //     component: Main,
    //     children: [
    //         { path: 'index', title: 'Permission test page', name: 'accesstest_index', access: 0, component: () => import('@/views/access/access-test.vue') }
    //     ]
    // },
    // {
    //     path: '/international',
    //     icon: 'earth',
    //     title: {i18n: 'international'},
    //     name: 'international',
    //     component: Main,
    //     children: [
    //         { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: () => import('@/views/international/international.vue') }
    //     ]
    // },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: 'Server',
        component: Main,
        children: [
            // {
            //     path: 'text-editor',
            //     icon: 'compose',
            //     name: 'text-editor',
            //     title: 'Rich text editor',
            //     component: () => import('@/views/my-components/text-editor/text-editor.vue')
            // },
            {
                path: 'server-list',
                icon: 'compose',
                name: 'server-list',
                title: 'Server listing',
                component: () => import('@/views/my-components/server-list/server-list.vue')
            },
            {
                path: 'deploy-server-list',
                icon: 'compose',
                name: 'deploy-server',
                title: 'Deploy a server',
                component: () => import('@/views/my-components/deploy-server/deploy-server-list.vue')
            },
            // {
            //     path: 'md-editor',
            //     icon: 'pound',
            //     name: 'md-editor',
            //     title: 'Markdown Editor',
            //     component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
            // },
            // {
            //     path: 'image-editor',
            //     icon: 'crop',
            //     name: 'image-editor',
            //     title: 'Picture preview editing',
            //     component: () => import('@/views/my-components/image-editor/image-editor.vue')
            // },
            // {
            //     path: 'draggable-list',
            //     icon: 'arrow-move',
            //     name: 'draggable-list',
            //     title: 'Draggable list',
            //     component: () => import('@/views/my-components/draggable-list/draggable-list.vue')
            // },
            // {
            //     path: 'area-linkage',
            //     icon: 'ios-more',
            //     name: 'area-linkage',
            //     title: 'City Cascade',
            //     component: () => import('@/views/my-components/area-linkage/area-linkage.vue')
            // },
            // {
            //     path: 'file-upload',
            //     icon: 'android-upload',
            //     name: 'file-upload',
            //     title: 'File Upload',
            //     component: () => import('@/views/my-components/file-upload/file-upload.vue')
            // },
            // {
            //     path: 'count-to',
            //     icon: 'arrow-graph-up-right',
            //     name: 'count-to',
            //     title: 'Digital gradient',
            //     // component: () => import('@/views/my-components/count-to/count-to.vue')
            //     component: () => import('@/views/my-components/count-to/count-to.vue')
            // },
            // {
            //     path: 'split-pane-page',
            //     icon: 'ios-pause',
            //     name: 'split-pane-page',
            //     title: 'split-pane',
            //     component: () => import('@/views/my-components/split-pane/split-pane-page.vue')
            // }
        ]
    },
    {
        path: '/form',
        icon: 'android-checkbox',
        name: 'form',
        title: 'Form editing',
        component: Main,
        children: [
            { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: () => import('@/views/form/article-publish/article-publish.vue') },
            { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: () => import('@/views/form/work-flow/work-flow.vue') }

        ]
    },
    // {
    //     path: '/charts',
    //     icon: 'ios-analytics',
    //     name: 'charts',
    //     title: '图表',
    //     component: Main,
    //     children: [
    //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
    //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

    //     ]
    // },
    {
        path: '/tables',
        icon: 'ios-grid-view',
        name: 'tables',
        title: 'form',
        component: Main,
        children: [
            { path: 'dragableTable', title: 'Draggable sort', name: 'dragable-table', icon: 'arrow-move', component: () => import('@/views/tables/dragable-table.vue') },
            { path: 'editableTable', title: 'Editable form', name: 'editable-table', icon: 'edit', component: () => import('@/views/tables/editable-table.vue') },
            { path: 'searchableTable', title: 'Searchable form', name: 'searchable-table', icon: 'search', component: () => import('@/views/tables/searchable-table.vue') },
            { path: 'exportableTable', title: 'Table export data', name: 'exportable-table', icon: 'code-download', component: () => import('@/views/tables/exportable-table.vue') },
            { path: 'table2image', title: ' Form to image', name: 'table-to-image', icon: 'images', component: () => import('@/views/tables/table-to-image.vue') }
        ]
    },
    {
        path: '/advanced-router',
        icon: 'ios-infinite',
        name: 'advanced-router',
        title: 'Advanced routing',
        component: Main,
        children: [
            { path: 'mutative-router', title: 'Dynamic routing', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'argument-page', title: 'With reference page', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
        ]
    },
    {
        path: '/error-page',
        icon: 'android-sad',
        title: 'Error page',
        name: 'errorpage',
        component: Main,
        children: [
            { path: 'index', title: 'Error page', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
