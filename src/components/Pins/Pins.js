import React, {useEffect} from 'react'
import {usePins} from '../../app/hooks/PinsContext'
import {Wrapper, Img, Figure} from './PinsStyle'
import unsplash from '../../unsplash'
import {Promise} from 'bluebird'

function Pins() {

    const [pins, setPins] = usePins()

    const getHomePins = () => {
        const homePins = ['egypt', 'cat', 'oceans', 'dark', 'dogs']
        const promisesArr = [] //array of async func to put it in promise.all([promiseArr1, promiseArr2, ...]).then(...)
        let pinsData = []
        homePins.forEach((pin) => {
            promisesArr.push(
                unsplash.get('https://api.unsplash.com/search/photos', {
                    params: {
                        query: pin
                    }
                }).then((res) => {
                    let results = res.data.results
                    pinsData = [...pinsData, ...results]
                    pinsData.sort((a, b) => {return .5 - Math.random()})
                })
            )
        })
        Promise.all(promisesArr).then(() => setPins(pinsData))
    }

    useEffect(() => {
        getHomePins()
    }, [])

    return (
        <Wrapper>
            {pins && pins.map(({id, urls}) => (
                <Figure key={id}>
                    <Img src={urls?.regular} />
                </Figure>
            ))}
        </Wrapper>
    )
}

export default Pins
