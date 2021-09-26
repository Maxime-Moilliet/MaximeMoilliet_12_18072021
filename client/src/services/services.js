import axios from 'axios'

export default class Service {
    
    /**
     * Fetch user name from API
     * @param {Number} uid 
     * @returns {String} user name
     */
    getUserName = async (uid) => {
        const response = await axios.get(`/user/${uid}`)
        return response.data.data.userInfos.firstName
    }
    
    /**
     * Fetch user today score from API
     * @param {Number} uid 
     * @returns {Array} user today score
     */
    getUserTodayScore = async (uid) => {
        const response = await axios.get(`/user/${uid}`)
        return [{value: response.data.data.todayScore}, {value: 1 - response.data.data.todayScore}]
    } 
    
    /**
     * Fetch user key data from API
     * @param {Number} uid 
     * @returns {Array} user key data
     */
    getUserKeyData = async (uid) => {
        const response = await axios.get(`/user/${uid}`)
        return response.data.data.keyData
    }

    /**
     * Fetch user activities from API
     * @param {Number} uid 
     * @returns {Array} user activities
     */
    getUserActivities = async (uid) => {
        const response = await axios.get(`/user/${uid}/activity`)
        return response.data.data.sessions
    }
    
    /**
     * Fetch user average sessions from API
     * @param {Number} uid 
     * @returns {Array} user average sessions
     */
    getUserAverageSessions = async (uid) => {
        const response = await axios.get(`/user/${uid}/average-sessions`)
        return response.data.data.sessions
    } 

    /**
     * Fetch user performance from API
     * @param {Number} uid 
     * @returns {Object} user performance, user kind
     */
    getUserPerformance = async (uid) => {
        const response = await axios.get(`/user/${uid}/performance`)
        return {
            kind: response.data.data.kind,
            performance: response.data.data.data
        }
    } 

}
