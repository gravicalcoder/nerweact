import {useRef, useEffect,useState } from 'react'

export default function Clicker({ increment  ,  keyName, color})
{
  
    const [ count, setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0))
   //const [ count, setCount ] = useState(0)

    /*
    const increment = () =>
    {
        setCount(count + 1)
    }
    */

   // const [ count, setCount ] = useState(0)
    /*
    const countState = useState(0)
    const count = countState[0]
    const setCount = countState[1]
    
    console.log(countState)
    */
    /*
    useEffect(() =>
    {
        const savedCount = parseInt(localStorage.getItem('count') ?? 0)
       // console.log(savedCount)

       setCount(savedCount)
    }, [])

    */

    /*
    useEffect(() =>
    {
       // console.log('Count changed')
        localStorage.setItem('count', count)
    }, [ count ])
    */

    const buttonRef = useRef()

 

    //console.log(buttonRef)

   

    useEffect(() =>
    {
        //console.log(buttonRef)

        buttonRef.current.style.backgroundColor = 'papayawhip'
        buttonRef.current.style.color = 'salmon'
        return () =>
        {
            localStorage.removeItem(keyName)
        }
    }, [])

    useEffect(() =>
    {
        
            localStorage.setItem(keyName,'count')
        
    }, [ count ])


    //let count = 0
    const buttonClick = () =>
    {
        setCount(count + 1)
        increment()
       
    }


    return <div>
        <div style={ {color } } >Clicks count: {count} </div>
        <button ref={ buttonRef } onClick={ buttonClick }>Click me</button>
    </div>

}