import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import Scroll from '../components/scroll';
import { useState, useEffect } from 'react';
import ErrorBoundary from '../components/errorBoundary';
import { setSearchField } from '../actions';
import { connect } from 'react-redux';
 
const mapStateToProps = state=>{
    return {
        searchField: state.searchField
    };
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}
    

function App (props){
    const { searchField, onSearchChange} = props;

    const [robots, setRobot] = useState([]);
    // const [searchfield, setSearchfield] = useState("");
   
//     const onSearchChange = (event)=>{
//         // this.setState({"searchfield": event.target.value}); Old way of react < 16.8
//         setSearchfield(event.target.value);
//    };

   useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=> setRobot(users));
   }, []);

   const filterRobots = robots.filter((robot)=>{
       return robot.name.toLowerCase().includes(searchField);
    });
    
    return (
        <div className="tc">
            <h1 className="f-subheadline">Roboto</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filterRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);