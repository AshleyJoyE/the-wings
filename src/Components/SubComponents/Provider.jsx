import '../../css/Provider.css'
function Provider({data}){

    return (
        <div className='container1'>
            <img className='image' src={data.logo}></img>
            <div className='provider_name_and_company_container'>
                <label className='provider_name' >{data.name}</label>
                <label className='provider_company' >{data.company}</label>
            </div>
            <div className='provider_name_and_company_container'>
                <label className='provider_name' >{data.phoneNumber}</label>
                <label className='provider_company' >{data.email}</label>
            </div>
            
        </div>
    )
}
export default Provider;