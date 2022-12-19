enum Role {
    ROLE_USER = 'user',
    ROLE_ADMIN = 'admin',
    ROLE_SYSADMIN = 'sysadmin'
};
enum AppState {
    LOADING_STATE,
    LOADED_STATE,
    READY_STATE
};

let user: {name: string, role: Role};
user = {name: 'Juan', role: Role.ROLE_ADMIN};
console.log(user);