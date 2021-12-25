import FormComponent from "../Form/Form.component";
import Playists from '../Playists/Playists.component';

const Playist = () => {
    return(
        <>
        <h1>playist</h1>
        <FormComponent submitForm />

        <div className="playist_container">
            <Playists/>
        </div>
        </>
    )
}

export default Playist;