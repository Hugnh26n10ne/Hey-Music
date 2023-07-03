import routesConfig from '~/config/routes';

import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Talkshow from '~/pages/Talkshow';
import Karaoke from '~/pages/Karaoke';
import Podcast from '~/pages/Podcast';
import Radio from '~/pages/Radio';
import Library from '~/pages/Library';
import Profile from '~/pages/Profile';
import Info from '~/pages/Info';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.talkshow, component: Talkshow },
    { path: routesConfig.karaoke, component: Karaoke },
    { path: routesConfig.podcast, component: Podcast },
    { path: routesConfig.radio, component: Radio },
    { path: routesConfig.library, component: Library, layout: null },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.info, component: Info, layout: HeaderOnly },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
