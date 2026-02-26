export React from 'react'
export AddCartPage from './AddCartPage'

export default function NavbarPage({d1})
console.log(d1);

return (
    <div>
        <h3>NavbarPage : {d1}</h3>
        <AddCartPage d2 = {d1}/>
    </div>
)

