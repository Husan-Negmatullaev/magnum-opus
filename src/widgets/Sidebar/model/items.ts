import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'nav-link-home',
    Icon: HomeIcon,
  },
  {
    path: RoutePath.about,
    text: 'nav-link-about',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'nav-link-profile',
    Icon: ProfileIcon,
  },
];
