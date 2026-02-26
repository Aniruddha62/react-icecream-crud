import React, {usestate} from 'react'
import NavbarPage from './Navbarpage'

export default function Homepage() {
    let [data,setData] = useState(0)

    function change(){
        setData(data+1)
    }
    return (
        <div>
            <button onClick={change}>Add</button>
            <h2>Homepage : {data}</h2>
            <NavbarPage d1={data}/>
        </div>
    )
}