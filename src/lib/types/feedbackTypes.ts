export enum FeedbackType {
  None = "None",
}

export interface Feedback {
  tag: string | null;
  updatedOn: string | null;
  type: string;
}

export type NullFeedback = {
  tag: null;
  updatedOn: null;
  type: "None";
}
