import { type Feedback } from './feedbackTypes';
export interface VisibleMessage {
    text: string;
    author: Author;
    createdAt: string;
    timestamp: string;
    messageId: string;
    offense: string;
    adaptiveCards?: (AdaptiveCard)[] | null;
    sourceAttributions?: SourceAttribution[];
    feedback: Feedback;
    contentOrigin: string;
    privacy?: null;
    spokenText?: string | null;
}
export interface AdaptiveCard {
    type: string;
    version: string;
    body?: (CardBody)[] | null;
}
export interface CardBody {
    type: string;
    text: string;
    wrap: boolean;
    size?: string | null;
}
export interface SourceAttribution {
    providerDisplayName: string;
    seeMoreUrl: string;
    searchQuery: string;
}
