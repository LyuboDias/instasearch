import './App.scss';
import { 
    InstantSearch,
    SearchBox,
    Stats,
    Pagination,
} from 'react-instantsearch/dom'
import SEARCH_CLIENT from './constants/client'
import SideBar from './components/SideBar/SideBar';
import Content from './components/Content/Content'

function App() {
    return (
        <div className='wrapper'>
            <InstantSearch
                indexName='dev_GAMES'
                searchClient={SEARCH_CLIENT}
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
