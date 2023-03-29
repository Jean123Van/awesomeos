import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import {FaBars} from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'

function Nav(){

    const [bars, setBars] = useState(false)
    const [active, setActive] = useState(false)


    function handleBars(){
        if(window.innerWidth<=600){
            setBars(true)
        } else {
            setBars(false)
            setActive(false)
        }
    }

    useEffect(()=>handleBars(),[]);

    window.addEventListener('resize',handleBars);

    return (
        <div className='nav_master'>
            {bars? 
                <div className={active? 'nav_sidebar' : 'nav_sidebar inactive'}>
                    <div className='nav_sidebar_cont'> 
                        <div className='ex_container'>
                            <MdOutlineClose className='ex_logo' onClick={()=>setActive(false)}/>
                        </div>
                        <h3><Link className='button_header' to='/' onClick={()=>setActive(false)}>home</Link></h3>
                        <h3><Link className='button_header' to='/about' onClick={()=>setActive(false)}>about</Link></h3>
                        <Link to='/contact' className='contact_button' onClick={()=>setActive(false)}>contact us</Link>
                    </div>
                    <img className='circle3' src='assets/circle3.png'/>
                </div>    
                :
                null
            }
            <div className="div_body">
                <div className='nav_buttons'>
                    <h1 className='header'>myteam</h1>
                    {bars? null:
                    <>
                        <h3><Link className='link_bottom' to='/'>home</Link></h3>
                        <h3><Link className='link_bottom' to='/about'>about</Link></h3>
                    </>}
                </div>
                {bars? <FaBars className='close_bars' onClick={()=>setActive(!active)}/>:<Link to='/contact' className='contact_button'>contact us</Link>}
            </div>
        </div>
    )
}

export default Nav