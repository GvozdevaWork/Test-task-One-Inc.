export var EPosts;
(function (EPosts) {
    EPosts[EPosts["Dev"] = 1] = "Dev";
    EPosts[EPosts["QA"] = 2] = "QA";
    EPosts[EPosts["TeamLead"] = 3] = "TeamLead";
})(EPosts || (EPosts = {}));
export var EPostsToLabelMapping = [
    { value: EPosts.Dev, name: 'Dev' },
    { value: EPosts.QA, name: 'QA' },
    { value: EPosts.TeamLead, name: 'TeamLead' }
];
var Employee = /** @class */ (function () {
    function Employee(id, firstName, middleName, lastName, post) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.post = post;
    }
    return Employee;
}());
export { Employee };
//# sourceMappingURL=Employee.js.map