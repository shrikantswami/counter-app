import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0 ,
        // imageUrl:"https://picsum.photos/200"
        tags : ['tag1', 'tag2']
     } ;

     styles = {
        fontSize: 20,
        fontWeight:"bold"
     };
    
    constructor(){
        super()
    }
    renderTags(){
        if (this.state.tags == 0) 
            return <p> there is no tag</p>
        return this.state.tags.map(tag => <li key={tag}>{tag }</li>)
    }

    onclickIncrement = id => {
        console.log("increment",id)
        this.setState({ count : this.state.count + 1})
        
    }


    render() { 
        console.log(this.props)
        let classes = this.getBadgeClasses();
        return (
            
        <React.Fragment>
            {/* <div>{this.props.children}</div> */}
            <span style={this.styles} className={classes}>
                 {this.increment()}
            </span>
            <button onClick={() => this.onclickIncrement(this.props.id)} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={() => this.props.onDelete(this.props.id) } className='btn btn-secondary btn-sm m-2'>Decrement</button>
            <ul>
                {/* { this.state.tags.map(tag => <li key={tag}>{tag }</li>)} */}
                {/* bellow is advanced method for above line code  */}
                { this.state.tags === 0 && 'Please add more tags'}
                {this.renderTags()}
            </ul>
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    increment(){
        const { count }  = this.state;
        return count ===0 ? "zero" : count;
    }
}
 
export default Counter;