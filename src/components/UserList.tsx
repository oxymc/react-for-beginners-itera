const uniqid = require('uniqid')
type User = {
    id?: string
    username?: string
    name?: string
    email?: string
}

type stateProps = {
    isUsers: boolean
    users: User[]
}
type Props = User & stateProps

const UserList: React.FC<Props> = ({isUsers, users}) => ( 
    <>
        {
            isUsers &&
            <section className="user-list-block">
                {
                    users.map(el => {return <div key={uniqid()} className="card user-list-block__card">
                            <div className="card__title">{el.username}</div>
                            <div>{el.name}</div>
                            <div className="card__email">
                                <a rel="noreferrer" target="_blank" href={`mailto:${el.email}`} >{el.email}</a>
                            </div>
                        </div>
                        }
                    )
                }
            </section>
        }
    </>
)

export {UserList}