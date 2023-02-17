import { Link } from 'react-router-dom'
const Header = () => {
    
    const HeaderStyle = {
        background: 'var(--bg-secondary-color)'
    }

    return(
    <div>
        <div className='navBar' style={HeaderStyle}>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
        </div>
    </div>

    )
}

export default Header