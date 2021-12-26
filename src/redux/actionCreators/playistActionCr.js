import Actions from '../actions/playistActions';

const createPlayist = (data) => ({type:Actions.CREATE_PLAYIST,payload:{playistName:data}});

const addSongsToPlayist = (playistId,data) => 
    ({type:Actions.ADD_SONG_TO_PLAYIST,payload:{playistId,song:data}});


export {addSongsToPlayist,createPlayist};