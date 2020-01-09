import React from 'react'
import './TheBanner.scss'

const TheBanner = (props) => {
    let oldNum = 0
    let btnNum = 0
    let lis = null
    let lock = false
    
    React.useEffect(() => {
        lis = document.querySelectorAll('.thebanner ul li')
    }, [])

    function eventLeft() {
        if(lock) return
        lock = true 
        oldNum = btnNum
        //
        if (btnNum === 0) {
            btnNum = lis.length - 1
        } else {
            btnNum--
        }
        //
        lis[oldNum].classList.remove('action')
        lis[oldNum].classList.add('action-left')
        lis[btnNum].classList.add('action-prev')
        //
        setTimeout(() => {
            removeClass()
            lock = false
        }, 1000)
    }

    function eventRight() {
        if(lock) return
        lock = true  
        oldNum = btnNum
        //
        if (btnNum === lis.length - 1) {
            btnNum = 0
        } else {
            btnNum++
        }
        //
        lis[oldNum].classList.remove('action')
        lis[oldNum].classList.add('action-right')
        lis[btnNum].classList.add('action-next')
        //
        setTimeout(() => {
            lock = false
            removeClass()
        }, 1000)
    }

    function removeClass() {
        let lisOldList = lis[oldNum].classList
        let lisNewList = lis[btnNum].classList

        lisOldList.contains('action-left') ?
            lisOldList.remove('action-left') : lisOldList.remove('action-right')
        lisNewList.contains('action-prev') ?
            lisNewList.remove('action-prev') : lisNewList.remove('action-next')
        lisNewList.add('action')
    }


    return (
        <div className='thebanner'>
            <div className='thebanner-btn-left'
                data-btn='left'
                onClick={eventLeft}>
                <span className='fa fa-angle-left'></span>
            </div>
            <div className='thebanner-btn-right'
                data-btn='right'
                onClick={eventRight}>
                <span className='fa fa-angle-right'></span>
            </div>
            {
                props.children
            }
        </div>
    )
}

export default TheBanner