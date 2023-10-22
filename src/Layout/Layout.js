import React,{ useState,useEffect,useRef } from 'react';
import classes from './Layout.module.css'
import { SideBar } from './SideBar/SideBar'
import InAppMenu from '../components/In-App-Menu/Menu'

 export const Layout = ({children, links})=>{


        performance.mark('start')
        const [ width , setWidth ] = useState(270)
        const [drawer ,setDrawer ] =useState(false)
        const sideBarRef = useRef();

        const handleClick = () => {
            console.log(sideBarRef)
                setDrawer(prevDrawer=>
                    !prevDrawer)
                    console.log("click occured")
            }

            performance.mark('end')
            performance.measure('performance for layout','start','end')
            const measurement = performance.getEntriesByType('measure')
            console.log(measurement)

            useEffect(()=>{


                if(drawer === true){
                    setWidth(currWidth=>70)
                }else{
                    setWidth(currWidth=>270)
                }
            },[drawer])
        

            useEffect(()=>{
                // if(drawer === ) return ;
                // if(drawer === true){

                //     sideBarRef.current.addEventListener('mouseenter',handleClick)
                //     return sideBarRef.current.removeEventListener('mouseover',handleClick)
                // }
        
            })
        
        
    return ( <>
            <div className={classes.layoutcontainer}>

            <div className={classes.sidebar} style={{width:`${width}px`}} >
                  <SideBar  ref={sideBarRef} links={links} handleClick={handleClick}  width={width}  drawer={drawer}/> 
            </div>
            <main className={classes.main} style={{width:`calc(100% - ${width}px)`,left:`${width}px`}}>
                    {children}
                            
            <InAppMenu/>
            </main>
            </div>
    
    
    
    </>)
}
