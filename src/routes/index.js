//Layout
import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

//Public Route
const publicRoutes = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/upload', element: Upload, layout: HeaderOnly },
];

//Private Route
const privateRoutes = [];

export { publicRoutes, privateRoutes };
