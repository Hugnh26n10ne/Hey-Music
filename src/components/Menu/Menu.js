import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import { CurrentUserInfo } from '~/components/Info';
import { FriendInfo } from '~/components/Info';
import MenuItem from './MenuItem';

function Menu({ children, type = '', menu = [], info = {}, ...menuProps }) {
    const Cmp = (attrs) => {
        if (type === 'user') {
            return <CurrentUserInfo />;
        } else if (type === '') {
            if (menu.length > 0) {
                return <MenuItem />;
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
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <Tippy interactive render={(attrs) => <Cmp attrs={attrs} />} {...menuProps}>
                {children}
            </Tippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    menu: PropTypes.array,
    info: PropTypes.object,
};

export default Menu;
