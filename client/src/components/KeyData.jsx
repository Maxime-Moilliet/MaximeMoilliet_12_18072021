import React from 'react'
import { KeyDataCard } from '../ui/KeyDataCard'
import { FakeKeyDataCard } from '../ui/FakeKeyDataCard'
import { UidContext } from '../context/UidContext'
import Service from '../services/services'

export class KeyData extends React.Component {
    static contextType = UidContext

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: false
        }
        this.service = new Service()
    }

    componentDidMount() {
        const uid = this.context
        /**
         * function called API and setData with response API. If error, log error message in console
        */
        const fetchKeyData = async () => {
            this.setState({ loading: true })
            try {
                const dataKey = await this.service.getUserKeyData(uid)
                this.setState({data: dataKey, loading: false })
            } catch (err) {
                window.location.pathname = "/not-found"
            }
        }
        fetchKeyData()
    }

    render () {
        const { data, loading } = this.state
        return (
            <section className="keyData">
                {data && <>
                    <KeyDataCard value={data.calorieCount + 'kCal'} background='#FBEAEA' name='Calories' iconUrl='./images/keyData-calories.png' iconAlt='icon feu'/>
                    <KeyDataCard value={data.carbohydrateCount + 'g'} background='#E9F4FB' name='Proteines' iconUrl='./images/keyData-proteines.png' iconAlt='icon cuisse de poulet'/>
                    <KeyDataCard value={data.lipidCount + 'g'} background='#FAF6E5' name='Proteines' iconUrl='./images/keyData-glucides.png' iconAlt='icon pomme'/>
                    <KeyDataCard value={data.proteinCount + 'g'} background='#FBEAEF' name='Proteines' iconUrl='./images/keyData-lipides.png' iconAlt='icon hamburger'/>
                </>}
                {loading && <>
                    {[...Array(4)].map((el, idx) => (
                        <FakeKeyDataCard key={idx} />
                    ))}
                </>}
            </section>
        )
    }
}