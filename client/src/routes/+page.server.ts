export const load = async (serverLoadEvent)=>{
    const {fetch}=serverLoadEvent;
    const response = await fetch('http://host.docker.internal:4000/show');
    const dataTest = await response.json();
    return{
        dataTest: dataTest,
    };
};