import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick=()=>{
        console.log('Click')
    }
    return (
        <header className="header">
            <h1 >{title}</h1>           
            <Button color ='green' text= 'Add' onClick={onClick} />
            
        </header>

     
  
    )
}

Header.defaultProps={
    title:'Task Tacker',
}

Header.prototype={
    title:PropTypes.String,
}

// const headingStyle = {   //css in js
//     color:'red',
//     backgrounColor:'black',
// }

export default Header
