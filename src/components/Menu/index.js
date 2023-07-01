import Tippy from '@tippyjs/react/headless';

import { UserInfo } from '~/components/Info';
import { FriendInfo } from '~/components/Info';
import MenuItem from './MenuItem';

function Menu({ children, type = '', items = [], ...menuProps }) {
    const Cmp = (attrs) => {
        if (type === 'user') {
            return <UserInfo attrs={attrs} />;
        } else if (type === '') {
            if (items.length > 0) {
                return <MenuItem attrs={attrs} items={items} />;
            } else {
                return '';
            }
        } else if (type === 'friend') {
            return <FriendInfo attrs={attrs} />;
        } else {
            return '';
        }
    };

    return (
        <div>
            <Tippy interactive visible={true} render={(attrs) => <Cmp attrs={attrs} />} {...menuProps}>
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
