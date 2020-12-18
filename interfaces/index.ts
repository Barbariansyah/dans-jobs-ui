export interface JobThumbnailProps {
    id: string;
    title: string;
    company: string;
    type: string;
    location: string;
    created_at: string;
}

export interface JobDetailProps {
    description: string;
    company_logo: string;
    how_to_apply: string;
    company_url: string;
    company: string;
    location: string;
    type: string;
    title: string;
}
