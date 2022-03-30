import algoliasearch from 'algoliasearch/lite'
import './App.scss';
import { 
    InstantSearch,
    SearchBox,
    Hits,
    Highlight,
    Stats,
    SortBy,
    Pagination,
    RefinementList,
    Menu,
    ClearRefinements
} from 'react-instantsearch/dom'
import Card from 'react-bootstrap/Card'

const searchClient = algoliasearch(
    `${process.env.REACT_APP_API_ID}`,
    `${process.env.REACT_APP_API_KEY}`
)

const Hit = ({hit}) => {

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
                    EU - ${hit.EU_Sales}M &nbsp;
                    NA - ${hit.NA_Sales}M &nbsp;
                    JP - ${hit.JP_Sales}M &nbsp;
                    Other - ${hit.Other_Sales}M &nbsp;
                    Global - ${hit.Global_Sales}M
                </p>
            </div>
            <div className="hit-rank">
                <p>#{hit.Rank}</p>
            </div>
            <div className="hit-year">
                <p>{hit.Year}</p>
            </div>
            <br/>
        </div> 
    )
}

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

const Content = () => {
    return (
        <>
            <div className='info'>
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
            <div className='content' >
                <Hits hitComponent={Hit} />
            </div>
        </>
    )
}

function App() {
    return (
        <div className='wrapper'>
            <InstantSearch
                indexName='dev_GAMES'
                searchClient={searchClient}
            >
                <header className='header'>
                    <div className='credits'>
                        <p>Created by L.Dias</p>
                        <div className='algolia'>
                            <p>Powered by</p>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Algolia-logo.svg/1200px-Algolia-logo.svg.png' alt='algolia logo' />
                        </div>
                    </div>
                    <img src='/coder.gif' alt='logo' className='img'/>
                    <SearchBox translations={{placeholder: 'Search Games'}}  submit={false} reset={false}  />
                    <br/>
                    <Stats />
                </header>
                <main className='main'>
                    <div className="left-panel">
                        <SideBar />
                    </div>
                    <div className="right-panel">
                        <Content />
                    </div>
                </main>
                <Pagination showLast  showPrevious={false} showNext={false} padding={2} />
            </InstantSearch>
        </div>
    );
}

export default App;
