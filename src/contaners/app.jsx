import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import { Component } from 'react';
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/errorBoundary';


class App extends Component{
   
   constructor(){
       super();
       this.state = {
           "robots": [],
           "searchfield": ""
       }
   }

    onSearchChange = (event)=>{
        this.setState({"searchfield": event.target.value});
   };

   componentDidMount(){ 
       fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=> this.setState({"robots": users}));
   }
   
    render(){
        const filterRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchfield);
        });

        return (
            <div className="tc">
                <h1 className="f-subheadline">Roboto</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundary>
                    
                </Scroll>
                
            </div>
        );
    }
    
}

export default App;