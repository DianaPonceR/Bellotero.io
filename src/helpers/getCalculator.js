import axios from 'axios'

export const getCalculator = async () => {
    const API = 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json'

    const resp = await axios(API)
    const {calculator} = resp.data

    return calculator
}
