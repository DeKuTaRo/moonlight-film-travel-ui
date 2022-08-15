import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Sidebar from './Sidebar';
import Content from './Content';
import Search from './Search';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('layout')}>
            <div className={cx('sidebar')}>
                <Sidebar />
            </div>
            <div className={cx('content')}>
                <Content />
            </div>
            <div className={cx('search')}>
                <Search />
            </div>
        </div>
    );
}

export default DefaultLayout;
