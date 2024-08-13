import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ()=>{
    try{
        const response = await fetch(env.SERVER_URL);
        if (!response.ok){
            throw error(response.status ,response.statusText);
        }
        const data = await response.json();
        return {dataTest: data};
    } catch (error){
        throw error(500, error.message);
    }

};
