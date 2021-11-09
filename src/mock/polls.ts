export interface IPolls {
    id: number;
    question: string;
    poll_count: number;
}

export const mockPolls: IPolls[] = [
    {
        id: 1,
        question: "What is your favourite frontend framework?",
        poll_count: 15
    },
    {
        id: 2,
        question: "What browser do you use?",
        poll_count: 20
    },
    {
        id: 3,
        question: "What is your favourite frontend framework?",
        poll_count: 15
    }
];

