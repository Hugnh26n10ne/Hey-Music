import Tippy from '@tippyjs/react/headless';

import { UserInfo } from '~/components/Info';
import { FriendInfo } from '~/components/Info';
import MenuItem from './MenuItem';

function Menu({ children, type = '', items = [], currentUser = [], ...menuProps }) {
    const Cmp = (attrs) => {
        if (type === 'user') {
            return <UserInfo data={items} info={currentUser} />;
        } else if (type === '') {
            if (items.length > 0) {
                return <MenuItem data={items} />;
            } else {
                return '';
            }
        } else if (type === 'friend') {
            return <FriendInfo />;
        } else {
            return '';
        }
    };

    return (
        <div>
            <Tippy interactive render={(attrs) => <Cmp attrs={attrs} />} {...menuProps}>
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
