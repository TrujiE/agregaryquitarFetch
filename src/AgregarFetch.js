import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import ListaItem from "./ListaItem";
import Contenido from "./Contenido";
import './App.css';


export function AgregarFetch(props){
	const items = props.items;
//	const contenido = props.addItem();
	const contenido = props.addItem;
//	console.log(items);
	const lista = items && items.map(item => {
		return <div className="list" key={item.key}> 
		<p> {item.text}
		<span onClick={ () => props.addItem(item.key)}>X</span>
		</p>
		</div>
	})

//	console.log(lista);

	const config = {
		headers: {'Content-Type' :'Application/json'},
//		body: JSON.stringify([]),  //JSON.stringify() traduce a JS el "[]", puede ser tambien '[]' esto es para POST
/*		body: JSON.stringify([
			{ label: "Make the bed", done: false},
			{ label: "Walk the dog", done: false },
			{ label: "Do the replits", done: false }
		]), //esto es para PUT		
*/	
		body: JSON.stringify([
			{label : "carga", done: false}
			]),
//		method: "POST"
		method: "PUT"
//		method: "GET"
		}
	useEffect(()=>{
		fetch("https://assets.breatheco.de/apis/fake/todos/user/aarontrujill", config)
		.then(respuesta => respuesta.json())
		.then(data => console.log(data))	
		.catch(error => console.log(error))
	}, [])
	return(
			<div>{lista}</div>
		)
}




export default AgregarFetch;