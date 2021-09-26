import React from 'react'
import { UidContext } from '../context/UidContext';
import { FakeUserInfo } from '../ui/FakeUserInfo';
import Service from '../services/services';

export class UserInfo extends React.Component {
    static contextType = UidContext
    
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            loading: false
        }
        this.service = new Service()
    }

    componentDidMount() {
        const uid = this.context
        /**
         * function called API and setUserName with response API. If error, log error message in console
         */
         const fetchUserName = async () => {
            this.setState({loading: true})
            try {
                const userName = await this.service.getUserName(uid)
                this.setState({userName: userName, loading: false})
            } catch(err) {
                window.location.pathname = "/not-found"
            }
        }
        fetchUserName()
    }
    
    render () {
        const { userName, loading } = this.state
        return (
            <>
            {loading && <FakeUserInfo />}
            {userName && <>
                <h1 className='userInfo__title'>Bonjour <span className='userInfo__title-active'>{userName}</span></h1>
                <p className='userInfo__info'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </>}
            </>
        )
    }
}