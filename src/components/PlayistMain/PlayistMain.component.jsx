import { useState } from "react";
import FormComponent from "../Form/Form.component";
import PlayistList from '../PlayistList/PlayistList.component';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from "@material-ui/core";
import PlayistDetails from "../PlayistDetails/PlayistDetails.component";

const PlayistMain = () => {
    const [playist,setPlayist] = useState({});

    const changeHandler = (data={}) => {
        setPlayist(data);
    }

    return(
        <>
        <Button onClick={()=> changeHandler()}><ArrowBackIcon/></Button>
        <h1>Playist</h1>
        {playist && Object.keys(playist).length>0 ? (<></>):(<FormComponent submitForm />)}

        <div className="playist_container">
            {playist && Object.keys(playist).length>0 ? (<PlayistDetails data={playist}/>)
                : (<PlayistList onChange={changeHandler}/>)
            }
        </div>
        </>
    )
}

export default PlayistMain;