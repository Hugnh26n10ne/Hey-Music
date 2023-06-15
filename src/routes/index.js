import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Talkshow from '~/pages/Talkshow';
import Karaoke from '~/pages/Karaoke';
import Podcast from '~/pages/Podcast';
import Radio from '~/pages/Radio';
import Library from '~/pages/Library';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/talkshow', component: Talkshow },
    { path: '/raraoke', component: Karaoke },
    { path: '/podcast', component: Podcast },
    { path: '/radio', component: Radio },
    { path: '/library', component: Library, layout: null },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
