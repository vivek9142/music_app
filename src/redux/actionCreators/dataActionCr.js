import dataActions from '../actions/dataActions'; 
import fetchAPI from '../../api/ApiRequest';

const setSearchData = (search) => {
    return ({type:dataActions.SET_SEARCH,payload:search});
}

const getData = (url,entity) => {
    return async(dispatch) => {
        await dispatch({type:dataActions.GET_DATA_PENDING,payload:{
            entity
        }})
        fetchAPI(url)
        .then(async res => {
             await dispatch({type:dataActions.GET_DATA_SUCCESS,payload:{
                entity,
                data: res
            }});
        })
        .catch(async err => {
            await dispatch({type:dataActions.GET_DATA_FAILURE,payload:{
                entity,
                error:err
            }})
        });
    }
}
const getFinalData = () => {
    return async(dispatch) => {
        await dispatch(getData('https://jsonplaceholder.typicode.com/photos','photos'));
        await dispatch(getData('https://jsonplaceholder.typicode.com/albums','albums'));
    }
}

const setFinalData = (albums,photos) => {
    for(let i of albums){
        for(let j of photos) {
            if(i.id === j.albumId){
                j['albumTitle'] = i.title;
                j['userId'] = i.userId;
            }
        }
    }
    return ({type:dataActions.SET_FINAL_DATA,payload:{data:photos.splice(0,150)}})
}
export {setFinalData,getFinalData,setSearchData,getData} ;