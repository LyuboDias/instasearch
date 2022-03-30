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

const searchClient = algoliasearch(
    `${process.env.REACT_APP_API_ID}`,
    `${process.env.REACT_APP_API_KEY}`
)

const Hit = ({hit}) => {
    return (
        <div className='hit'>
            <div className="hit-name">
                Name - <Highlight attribute="Name" hit={hit} />
            </div>
            <div className="hit-genre">
                Genre - <Highlight attribute="Genre" hit={hit} />
            </div>
            <div className="hit-platform">
                Platform - <Highlight attribute="Platform" hit={hit} />
            </div>
            <div className="hit-publisher">
                Publisher - <Highlight attribute="Publisher" hit={hit} />
            </div>
            <div className="hit-rank">
                {/* Rank - <Highlight attribute="Rank" hit={hit} /> */}
                <p>Rank - {hit.Rank}</p>
            </div>
            <div className="hit-year">
                {/* Year - <Highlight attribute="Year" hit={hit} /> */}
                <p>Year - {hit.Year}</p>
            </div>
            <div className="hit-global-sales">
                {/* Global Sales - <Highlight attribute="Global_Sales" hit={hit} /> */}
                <p>Global Sales - {hit.Global_Sales}</p>
            </div>
            <br/>
        </div>
    )
}

const SideBar = () => {
    return (
        <div className='sidebar'>
            <ClearRefinements />
            <h3>Genres</h3>
            <RefinementList attribute='Genre' showMore limit={5} />
            <h3>Publisher</h3>
            <RefinementList attribute='Publisher' searchable showMore limit={5}/>
            <h3>Platform</h3>
            <RefinementList attribute='Platform' showMore limit={5}/>
            <h3>Publisher</h3>
            <Menu attribute='Publisher' showMore limit={5}/>
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
                    <img src='/coder.gif' alt='logo' className='img'/>
                    <SearchBox translations={{placeholder: 'Search for Games'}} />
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
                <Pagination showLast />
            </InstantSearch>
        </div>
    );
}

export default App;
