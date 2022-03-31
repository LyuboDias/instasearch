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
                    <img src='https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966' alt='logo' className='img'/>
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
