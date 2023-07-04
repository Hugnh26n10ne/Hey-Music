import config from '~/configs';

import { HeaderOnly } from '~/layouts';

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
    { path: config.routes.home, component: Home },
    { path: config.routes.talkshow, component: Talkshow },
    { path: config.routes.karaoke, component: Karaoke },
    { path: config.routes.podcast, component: Podcast },
    { path: config.routes.radio, component: Radio },
    { path: config.routes.library, component: Library, layout: null },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.info, component: Info, layout: HeaderOnly },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
