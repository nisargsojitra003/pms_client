export interface MenuItem {
    title?: string;
    icon?: string;
    link?: string;
    color?: string;
    urlSegment: string;
    hideFor?: string;

    expanded?: boolean;
    subMenu?: MenuItem[] | undefined;
}