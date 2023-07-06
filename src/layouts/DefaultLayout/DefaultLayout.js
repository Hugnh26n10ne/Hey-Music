import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import React, { useReducer } from 'react';

import Header from '~/layouts/components/Header';
import Nav from '~/layouts/components/Nav';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

export const LayoutContent = React.createContext();

const initialState = {
    isActive: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_ACTIVE':
            return {
                ...state,
                isActive: !state.isActive,
            };

        default:
            return state;
    }
};

function LayoutDefault({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <LayoutContent.Provider value={{ state, dispatch }}>
                <Header />
                <div className={cx('container')}>
                    <Nav />
                    <div className="content">{children}</div>
                </div>
            </LayoutContent.Provider>
        </div>
    );
}

LayoutDefault.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutDefault;
