import React from "react";
import ReactDOM from "react-dom";
import './App.css';


function ListaItem(props){
	const items = props.items;
	const listItems = items.map(item => {
		return <div className="list" key={item.key}>
			<p> {item.text}
			<span onClick={ () => props.borrarItem(item.key)}>X</span>
			</p>
		</div>

	})

	
	//console.log(listItems);
	return(
		<div>{listItems} </div>

	)
}

export default ListaItem;


