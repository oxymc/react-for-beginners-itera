import { useState } from 'react'
import { User } from './components/User'
import { UserList } from './components/UserList'
import './App.css'

function App() {
    const [name, setName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [emailAddres, setEmailAddres] = useState<string>('')
    const [isUsers, setIsUsers] = useState<boolean>(false)
    const [users, setUsers] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const emailCheck: any = (value: string | null) => {
        if(value != null && value.indexOf('@') > -1 && value.indexOf('.') > -1) {
            setEmailAddres(value)
        }
        else {
            return false
        }
    }

    const addNewUser = (username: string, name: string, email: string) => {
        if(username && name && email) {
            const obj: object = {username, name, email, id: Date.now()}
            setUsers([...users, obj])
            setIsUsers(true)
            scrollToEnd()
        }
        console.log(users.includes('address'))
    }
    
   const getUsers: any = () => {
        setIsLoading(true)
        return fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(
                (result) => setUsers([...users, ...result])
            )
            .then(
                () => setIsUsers(true)
            )
            .then(
                () => setIsLoading(false)
            )
            .then(
                () => scrollToEnd()
            )
            .catch((error) => {
                console.error(error)
            })
    }

    const scrollToEnd = () => {
        setTimeout(
            () => {
                const objDiv: any = document.querySelector("#root")
                objDiv.scrollIntoView({ behavior: 'smooth', block: 'end' })
            }, 100
        )
    }

    return (
        <>
            <User 
                name = {name}
                lastName={lastName}
                emailAddres={emailAddres}
                isLoading={isLoading}
                users={users}
                getFirstName={() => setName(prompt("What's your name?") ?? '')}
                getLastName={() => setLastName(prompt("What's your last name?") ?? '')}
                getEmail={() => emailCheck(prompt("What's your email?") ?? '')}
                addNewUser={addNewUser}
                getUserList={() => getUsers()}
            />
            <UserList
                isUsers={isUsers}
                users={users}
            />
        </>
    )
}

export default App
