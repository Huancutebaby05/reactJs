import React from 'react'
import axios from 'axios'

export async function getStaticProps(){
    const data = await axios.get("https://api.covid19api.com/total/country/vietnam")
    return{
        props:{
            covidInformation : data.data
        }
    }
}
const CovidInformation = ({covidInformation}) =>{
    console.log(covidInformation);
    return(
        <div className='pt-3'>
            <h2> Viet Nam covid information</h2>
            <table className='table table-hover table-striped w-75 ms-5'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Actions</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>                   
                    {covidInformation.map((information, index) => (
                        <tr key={index}>
                            <td>{information.Date}</td>
                            <td>{information.Confirmed}</td>
                            <td>{information.Actions}</td>
                            <td>{information.Recovered}</td>
                            <td>{information.Deaths}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default CovidInformation