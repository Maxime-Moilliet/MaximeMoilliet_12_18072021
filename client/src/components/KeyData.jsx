import React from 'react'
import { KeyDataCard } from '../ui/KeyDataCard'
import { FakeKeyDataCard } from '../ui/FakeKeyDataCard'
import { UidContext } from '../context/UidContext'
import axios from 'axios'

export class KeyData extends React.Component {
    static contextType = UidContext

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: false
        }
    }

    componentDidMount() {
        const uid = this.context
        /**
         * function called API and setData with response API. If error, log error message in console
        */
        const fetchKeyData = async () => {
            this.setState({ loading: true })
            try {
                const response = await axios.get(`/user/${uid}`)
                this.setState({data: response.data.data.keyData, loading: false })
            } catch (err) {
                console.log(`failed API get user key-data /user/:id ${err?.message}`)
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