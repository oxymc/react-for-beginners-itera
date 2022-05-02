type TextProps = {
    name: string
    lastName: string
    emailAddres: string
    isLoading: boolean
    users: string[]
}
type FuncProps = {
    getFirstName: () => string | void
    getLastName: () => string | void
    getEmail: () => string | void
    addNewUser: (a: string, b: string, c: string) => string | void
    getUserList: () => string | void
}
type Props = TextProps & FuncProps

const User: React.FC<Props> = ({getFirstName, getLastName, getEmail, getUserList, addNewUser, name, lastName, emailAddres, isLoading, users}) => (
    <>
        <section className="user-block">
            <h3>New user</h3>
            <div>
                <span className="text user-block__text">first name:</span> {name ? name : '࠰࠰࠰࠰࠰࠰࠰࠰࠰࠰࠰࠰'}
                <button className="button user-block__button" onClick={getFirstName}>
                    {name ? 'Change' : 'Type'}
                </button>
            </div>
            <div>
                <span className="text user-block__text">last name:</span> {lastName ? lastName : '࠰࠰࠰࠰࠰࠰࠰࠰࠰࠰࠰࠰'}
                <button className="button user-block__button" onClick={getLastName}>
                    {lastName ? 'Change' : 'Type'}    
                </button>
            </div>  
            <div>
                <span className="text user-block__text">✉ email:</span> {emailAddres ? emailAddres : '࠰࠰࠰࠰࠰࠰࠰࠰࠰࠰࠰࠰'}
                <button className="button user-block__button" onClick={getEmail}>
                    {emailAddres ? 'Change' : 'Type'}    
                </button>
            </div>
            <div>
                {emailAddres && emailAddres !== '࠰࠰࠰࠰࠰࠰࠰࠰࠰࠰࠰࠰' ?
                    <button className="button user-block__button_direction-center" onClick={() => addNewUser(name ?? '', lastName ?? '', emailAddres ?? '')}>
                        add new contact 
                    </button> :
                    <button className="button user-block__button_direction-center_disabled">add new contact</button>
                }
            </div>
        </section>
        {users.length < 9 &&
            <div>
                {!isLoading ?
                    <button className="button user-list-block__button" onClick={getUserList}>
                        get all users
                    </button> :
                    <div className="loader user-list-block__loader">Loading...</div>
                }
            </div>
        }
    </>
)

export {User}