export interface RouteItem extends LinkItem {
    description?: string;
    rel?: string;
    image?: string;
}
export interface LinkItem{
    id: number;
    name: string;
    title: string;
    slug: string;
    target?: boolean;
}