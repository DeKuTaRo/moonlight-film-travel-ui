import config from '~/config';

import Home from '~pages/Home';
import Film from '~pages/Film';
import Explore from '~pages/Explore';
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.explore,
        component: Explore,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
