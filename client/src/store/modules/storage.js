import axios from 'axios'
import _ from 'lodash';

const storage = {
    state: {
        
    },
    mutations: {
        
    },
    actions: {
        async FETCH_STORAGEDETAILS({ commit }) {
            const URL = 'http://localhost:9090/getStorageListing'
            axios(URL, {
                method: 'get',
                 })
                .then(function (response) {
                    console.log(response.data);
                    //commit('RECEIVE_SERVERS', response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
export default storage;