import AddNote from './Addnote';
import Notes from './Notes';


const Home = (props) => {
    const {showAlert} = props
    return (
        <div>
            <AddNote showAlert={showAlert} />
            <Notes showAlert={showAlert} />
        </div>
    )
}

export default Home;