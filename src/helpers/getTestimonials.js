import axios from "axios";

export const getTestimonials = async () => {
    const API = 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json';

    const resp = await axios(API)
    const {slider} = resp.data

    return slider
}