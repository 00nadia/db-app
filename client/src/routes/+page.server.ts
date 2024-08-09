export const load = async (serverLoadEvent)=>{
    const {fetch}=serverLoadEvent;
    const response = await fetch('http://localhost:4000/show');
    const dataTest = await response.json();
    return{
        dataTest: dataTest,
    };
};