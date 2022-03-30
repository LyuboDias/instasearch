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

const tableHeads = [
    'Name', 'Genre', 'Platform', 'Publisher', 'Rank', 'Year', 'Global Sales'
]

const Hit = ({hit}) => {
    const attributes = [
        hit.Rank, hit.Year, hit.Global_Sales
    ]

    return (
        <div className='hit'>
            <table>
                <thead>
                    <tr>
                        {tableHeads.map((tableHead, index) => {
                            return <th key={index}>{tableHead}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                        <Highlight attribute="Name" hit={hit} highlightPreTag />
                        </th>
                        
                    {/* </tr>
                    <tr> */}
                        <th>
                        <Highlight attribute="Genre" hit={hit} />
                        </th>
                        
                    {/* </tr>
                    <tr> */}
                        <th>
                        <Highlight attribute="Platform" hit={hit} />
                        </th>
                        
                    {/* </tr>
                    <tr> */}
                        <th>
                        <Highlight attribute="Publisher" hit={hit} />
                        </th>
                        
                    {/* </tr> */}
                    {/* <tr> */}
                        {attributes.map((test, index) => {
                            return (
                                <th key={index}>
                                    {test}
                                    {/* <Highlight attribute={string} hit={hit} highlightPreTag /> */}
                                </th>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
            {/* <div className="hit-name">
                Name - <Highlight attribute="Name" hit={hit} highlightPreTag />
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
                <p>Rank - {hit.Rank}</p>
            </div>
            <div className="hit-year">
                <p>Year - {hit.Year}</p>
            </div>
            <div className="hit-global-sales">
                <p>Global Sales - {hit.Global_Sales}</p>
            </div> */}
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
                <Pagination showLast />
            </InstantSearch>
        </div>
    );
}

export default App;
