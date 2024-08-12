import { SERVER_URL } from '$env/static/private';

export const load = async ({fetch})=>{
    console.log(SERVER_URL)
    const response = await fetch(SERVER_URL);
    const dataTest = await response.json();
    return{
        dataTest: dataTest,
    };
};
