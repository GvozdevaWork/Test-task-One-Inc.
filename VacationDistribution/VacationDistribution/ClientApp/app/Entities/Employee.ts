export enum EPosts {
    Dev = 1,
    QA = 2,
    TeamLead = 3
}

export const EPostsToLabelMapping = [
    { value: EPosts.Dev, name: 'Dev' },
    { value: EPosts.QA, name: 'QA' },
    { value: EPosts.TeamLead, name: 'TeamLead' }
];

export class Employee {
    constructor(
        public id?: number,
        public firstName?: string,
        public middleName?: string,
        public lastName?: string,
        public post?: EPosts
    ) {}
}