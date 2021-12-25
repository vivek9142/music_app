import Actions from '../actions/playistActions';

const createPlayist = (data) => ({type:Actions.CREATE_PLAYIST,payload:{playistName:data}});

const addSongsToPlayist = (data) => ({type:Actions.ADD_SONG_TO_PLAYIST,songs:data});


export {createPlayist};