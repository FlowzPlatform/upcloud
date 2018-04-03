import Cookies from 'js-cookie';
import axios from 'axios'
import _ from 'lodash'; 
const server = {
    state: {
        data: [],
        servers: [],
        mZones:[],
        mPlans:[]
    },
    mutations: {
        RECEIVE_SERVERS(state,  data ) {
            state.servers = data
        },
        RECEIVE_ZONE(state,  data ) {
            state.mZones = data
        },
        RECEIVE_PLAN(state, data){
            state.mPlans =  data
        }
    },
    actions: {
        async FETCH_SERVERS({ commit }) {
            const URL = 'http://localhost:9090/getServerListing'
            axios(URL, {
                method: 'get',
                 })
                .then(function (response) {
                    console.log(response.data);
                    commit('RECEIVE_SERVERS', response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });

           
        },
        async FETCH_ZONE({ commit }) {
            const URL = 'http://localhost:9090/getZone'
            axios(URL, {
                method: 'get',
                 })
                .then(function (response) {
                    console.log("Zones:",response.data);
                    commit('RECEIVE_ZONE', response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        async FETCH_PLAN({ commit }) {
            const URL = 'http://localhost:9090/getPlan'
            axios(URL, {
                method: 'get',
                 })
                .then(function (response) {
                    console.log("plans:",response.data);
                    commit('RECEIVE_PLAN', response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },

    getters: {
        characters: state => {
            return state.data.map(data => {
                return {
                    name: data.name,
                    url: data.urls[1] ? data.urls[1].url : data.urls[0].url,
                    image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
                    description: data.description === '' ? 'No description listed for this character.' : data.description
                }
            })
        },
        serverList: state => {
            return state.servers.map(server => {
                let tagValue = server.tags.tag.join(", ")
                let ip
                let ips = server.ip_addresses.ip_address
                ips.forEach(ipaddress => {
                    if(ipaddress.family==='IPv4' && ipaddress.access==='public'){
                        ip = ipaddress.address
                    }
                });
                return {
                    title:server.title,
                    tag:tagValue,
                    zone:server.zone,
                    uuid:server.uuid,
                    ip_address:ip,
                    core_number:server.core_number,
                    storage_device:server.storage_devices.storage_device[0].storage_size,
                    memory_amount:server.memory_amount,
                    uptime:'-',
                    disk_image:'-'
                }
            })
        },
        zoneList: state => {
            if(!state.mZones)
                return []

            let list=state.mZones.zones
            return list ? list.zone : []
        },
        planList: state => {
            if(!state.mPlans)
                return []

            let list=state.mPlans.plans
            return list ? list.plan : []
        },
    }

};

export default server;
