/*
function updateUser(oldUser: any, newUser: any): any {
    return {...oldUser,...newUser};
};
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateUser(oldUser, newUser) {
    return __assign(__assign({}, oldUser), newUser);
}
;
function makeAdmin(user) {
    return __assign(__assign({}, user), { admin: true });
}
;
var userAge = 55;
var user1 = { name: 'Junior' };
var user2 = { age: 25, gender: 'M' };
console.log(updateUser(user1, userAge));
console.log(makeAdmin(user2));
// Using generics with classes
var Planet = /** @class */ (function () {
    function Planet(closestStar) {
        this.closestStar = closestStar;
    }
    ;
    return Planet;
}());
;
var earth = new Planet('Sun');
var planetX = new Planet({ name: 'Xorox', distance: 10 });
;
var planetZ = new Planet({ data: ['Xorox', 'Xorax'], size: 10 });
;
var newUser1;
newUser1 = { size: 77, data: [23, 4, 66, 80] };
console.log(newUser1);
