
document.addEventListener("DOMContentLoaded", init)
async function init(){
    const userFactory = new UserFactory()
    Guest = userFactory.createUser('Guest')
    Manager = userFactory.createUser('Manager')
    Admin = userFactory.createUser('Admin')
    Member = userFactory.createUser('Member')
    
    console.log(Guest)
    console.log(Manager)
    console.log(Admin)
    console.log(Member)
}


class UserFactory{
    createUser = (type, props) => {
        switch (type) {
            case 'Guest':
                return new UserGuest(props)
            case 'Manager':
                return new UserManager(props)
            case 'Admin':
                return new UserAdmin(props)
            case 'Member':
                return new UserMember(props)
        }
    }
}

class UserGuest{
    constructor(){
        this.permissions = ['Read']
    }
}

class UserManager{
    constructor(){
        this.permissions = ['Read', 'Edit', 'Create']
        this.color = 'green'
    }
}

class UserAdmin{
    constructor(){
        this.permissions = ['Read', 'Edit', 'Create', 'Remove']
        this.color = 'red'
    }
}

class UserMember{
    constructor(){
        this.permissions = ['Read', 'Edit', 'Create', 'Comment']
        this.color = 'black'
    }
}