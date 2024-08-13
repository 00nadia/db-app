import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ()=>{
    const response = await fetch(env.SERVER_URL);
    if (response.status === 200){
        const dataTest = await response.json();
        if (dataTest.includes){
            return{
                dataTest: dataTest,
            }
        }else{
                throw error(response.status ,response.statusText);
        }
    }
    else{
        throw error(response.status ,response.statusText);
    }
    

};
