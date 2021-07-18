import React from 'react'

export class FakeUserInfo extends React.Component {
    render () {
        return (
            <>
                <h1 className='fakeUserInfo__title'>Bonjour Mattéo</h1>
                <p className='fakeUserInfo__info'>Félicitation ! Vous avez explosé vos objectifs hier</p>
            </>
        )
    }
}