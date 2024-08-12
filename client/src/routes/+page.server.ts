import { env } from '$env/dynamic/private';

export const load = async ({fetch})=>{
    const response = await fetch(env.SERVER_URL);
    const dataTest = await response.json();
    return{
        dataTest: dataTest,
    };
};
