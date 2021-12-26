import Actions from '../actions/playistActions';

const createPlayist = (data) => ({type:Actions.CREATE_PLAYIST,payload:{playistName:data}});

const addSongsToPlayist = (playistId,data) => 
    ({type:Actions.ADD_SONG_TO_PLAYIST,payload:{playistId,song:data}});

const deleteSongFromPlayist = (playistId,songId) => 
    ({type:Actions.DELETE_SONG_FROM_PLAYIST,payload:{playistId,songId}});

const shuffleSongs = (playistId) => 
    ({type:Actions.SHUFFLE_LIST,payload:{playistId}});


export {addSongsToPlayist,createPlayist,deleteSongFromPlayist,shuffleSongs};