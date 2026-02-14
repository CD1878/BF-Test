export interface EventData {
    id: string;
    title: string;
    subtitle?: string;
    description: string[];
    image: string;
    imageAlt: string;
    isImagePortrait?: boolean;
}
