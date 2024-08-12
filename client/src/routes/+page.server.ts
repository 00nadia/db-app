import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ()=>{
    const response = await fetch(env.SERVER_URL);
    
    const dataTest = await response.json();

    return{
        dataTest: dataTest,
    };
};
