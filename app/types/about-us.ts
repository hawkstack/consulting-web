export interface PlatformItem {
    id: number;
    number: string;
    title: string;
    description: string;
}

export interface EndtoEndServicesContent {
    title: string;
    items: PlatformItem[];
}

export interface AboutUsPageData {
    endtoendServicesData: EndtoEndServicesContent;
}
