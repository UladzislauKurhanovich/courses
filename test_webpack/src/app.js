import React from 'react'
import $ from 'jquery'

export default class App extends React.Component {
    componentDidMount() {
        $('<h1 />')
            .text('Hello world from JQuery')
            .css({
                textAlign: 'center',
                color:'#2020c1'
            })
            .appendTo($('header'))
    }
    render() {
        return (
            <React.Fragment>
            <header></header>

            <hr />
            
            <div className="box">
                <h2 className="box-title">Box title</h2>
        
                <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Recusandae quaerat blanditiis quas atque cupiditate expedita 
                    facilis laboriosam minima reprehenderit voluptates. Odio eos autem,
                     fugit culpa iste fugiat quaerat minus? Molestias.</p>
            </div>
            </React.Fragment>
        )
    }
}