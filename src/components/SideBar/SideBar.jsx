import React from 'react';
import { ClearRefinements, 
    Menu, 
    RefinementList 
} from "react-instantsearch/dom"
import './Styles.scss';


const SideBar = () => {
    return (
        <div className='sidebar'>
            <ClearRefinements />
            <div className='sidebar-item'>
                <h5>Genres</h5>
                <RefinementList attribute='Genre' showMore limit={5} />
            </div>
            <div className='sidebar-item'>
                <h5>Publisher</h5>
                <RefinementList attribute='Publisher' searchable showMore limit={5}/>
            </div>
            <div className='sidebar-item'>
                <h5>Platform</h5>
                <RefinementList attribute='Platform' showMore limit={5}/>
            </div>
            <div className='sidebar-item'>
                <h5>Publisher</h5>
                <Menu attribute='Publisher' showMore limit={5}/>
            </div>
        </div>
    )
}

export default SideBar
