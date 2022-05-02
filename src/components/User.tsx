type TextProps = {
    name: string | null
    lastName: string | null
    emailAddres: string | null
    isUsers: boolean
}
type FuncProps = {
    getFirstName: () => string | void
    getLastName: () => string | void
    getEmail: () => string | void
    addNewUser: (a: string | null, b: string | null, c: string | null) => string | void | null
    getUserList: () => string | void | null
}
type Props = TextProps & FuncProps

const User: React.FC<Props> = ({getFirstName, getLastName, getEmail, getUserList, addNewUser, name, lastName, emailAddres, isUsers}) => (
    <section className="user-block">
        <div>
            <span className="text user-block__text">New first name:</span> {name ? name : 'XXXXXX'}
            <button className="button user-block__button" onClick={getFirstName}>
                {name ? 'Change' : 'Type'}
            </button>
        </div>
        <div>
            <span className="text user-block__text">New last name:</span> {lastName ? lastName : 'XXXXXX'}
            <button className="button user-block__button" onClick={getLastName}>
                {lastName ? 'Change' : 'Type'}    
            </button>
        </div>  
        <div>
            <span className="text user-block__text">New email:</span> {emailAddres ? emailAddres : 'XXXXXX'}
            <button className="button user-block__button" onClick={getEmail}>
                {emailAddres ? 'Change' : 'Type'}    
            </button>
        </div>
        <div>
            {emailAddres && emailAddres !== 'XXXXXX' &&
                <button className="button user-block__button_direction-center" onClick={() => addNewUser(name, lastName, emailAddres)}>
                    add new contact 
                </button>
            }
            <button className="button user-list-block__button" onClick={getUserList}>
                get all users
            </button>
        </div>
    </section>
)

export {User}