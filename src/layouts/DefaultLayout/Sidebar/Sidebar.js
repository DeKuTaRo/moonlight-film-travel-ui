import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import config from '~/config';
import images from '~/assets/images';
import {
    HomeIcon,
    HomeActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    SearchIcon,
    SearchActiveIcon,
    BookmarkedIcon,
    HistoryIcon,
    ProfileIcon,
    LoginIcon,
} from '~/components/Icons';
import Menu, { MenuItem } from '~/layouts/DefaultLayout/Sidebar/Menu';
import Personal, { PersonalItem } from '~/layouts/DefaultLayout/Sidebar/Personal';
import General, { GeneralItem } from '~/layouts/DefaultLayout/Sidebar/General';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper', 'flex-items-center')}>
            <div className={cx('logo')}>
                <div>
                    <img src={images.logo} alt="TikTok" className={cx('logo-link')} />
                </div>
                <h1 className={cx('logo-name')}>
                    <span>MOON</span>
                    <span className={cx('text-primary')}>LIGHT</span>
                </h1>
            </div>
            <div className={cx('menu')}>
                <span>MENU</span>
            </div>
            <div className={cx('menu-items')}>
                <Menu>
                    <MenuItem
                        title="Home"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreActiveIcon />}
                    />
                    <MenuItem
                        title="Search"
                        to={config.routes.search}
                        icon={<SearchIcon />}
                        activeIcon={<SearchActiveIcon />}
                    />
                </Menu>
            </div>
            <div className={cx('personal')}>
                <span>PERSONAL</span>
            </div>
            <div className={cx('personal-items')}>
                <Personal>
                    <PersonalItem title="Bookmarked" to="" icon={<BookmarkedIcon />} />
                    <PersonalItem title="History" to="" icon={<HistoryIcon />} />
                </Personal>
            </div>
            <div className={cx('general')}>
                <span>GENERAL</span>
            </div>
            <div className={cx('general-items')}>
                <General>
                    <GeneralItem title="Profile" to="" icon={<ProfileIcon />} />
                    <GeneralItem title="Login" to="/login" icon={<LoginIcon />} />
                </General>
            </div>
        </div>
    );
}

export default Sidebar;
