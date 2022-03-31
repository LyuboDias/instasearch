import React from 'react';
import { Hits, SortBy, Highlight } from "react-instantsearch/dom"
import NoResults from '../NoResults/NoResults';
import './Styles.scss'


const Hit = ({hit}) => {
    const {
        EU_Sales, 
        NA_Sales, 
        JP_Sales, 
        Other_Sales, 
        Global_Sales, 
        Rank, 
        Year
    } = hit

    return (
        <div className='hit'>
            <div className="hit-name">
                <Highlight attribute="Name" hit={hit} highlightPreTag />
            </div>
            <div className="hit-publisher">
                <Highlight attribute="Publisher" hit={hit} />
            </div>
            <br/>
            <div className="hit-info">
                Platform - <Highlight attribute="Platform" hit={hit} /> / Genre - <Highlight attribute="Genre" hit={hit} />
            </div>
            <br/>
            <br/>
            <div className="hit-sales">
                <p>
                    Sales: &nbsp;
                    EU - ${EU_Sales}M &nbsp;
                    NA - ${NA_Sales}M &nbsp;
                    JP - ${JP_Sales}M &nbsp;
                    Other - ${Other_Sales}M &nbsp;
                    Global - ${Global_Sales}M
                </p>
            </div>
            <div className="hit-rank">
                <p>#{Rank}</p>
            </div>
            <div className="hit-year">
                <span className='muted'>Released</span>
                <p>{Year}</p>
            </div>
            <br/>
        </div> 
    )
}

const Content = () => {
    return (
        <>
            <div className='sort'>
                {/* SortBy is not working as I cant create replica of the index (dont have enough free space :/ ) */}
                <SortBy 
                    defaultRefinement="dev_GAMES"
                    items={[
                        {value: 'dev_GAMES', label: 'Most Relevant'},
                        {value: 'dev_GAMES_Global_Sales_asc', label: 'Global Sales (asc)'},
                        {value: 'dev_GAMES_Global_Sales_desc', label: 'Global Sales (desc)'},
                    ]}
                />
            </div>
            <div>
                <Hits hitComponent={Hit} />
                <NoResults />
            </div>
        </>
    )
}

export default Content
