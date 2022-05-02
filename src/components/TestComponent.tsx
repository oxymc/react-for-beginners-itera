type TextProps = {
    name: string | null
    lastName: string | null
}
type FuncProps = {
    getFirstName: () => string | void
    getLastName: () => string | void
}
type Props = TextProps & FuncProps

const TestComponent: React.FC<Props> = ({getFirstName, getLastName, name, lastName}) => (
    <section className="test-block">
        <div>
            <span className="text test-block__text">My first name:</span> {name ? name : '_______'}
            <button className="button test-block__button" onClick={getFirstName}>
                {name ? 'Change' : 'Type'}
            </button>
        </div>
        <div>
            <span className="text test-block__text">My last name:</span> {lastName ? lastName : '_______'}
            <button className="button test-block__button" onClick={getLastName}>
                {lastName ? 'Change' : 'Type'}    
            </button>
        </div>  
    </section>
)

export {TestComponent}