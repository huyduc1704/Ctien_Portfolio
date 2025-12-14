export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image?: string;
    liveUrl?: string;
    repoUrl?: string;
    year?: number;
    period?: string;
}