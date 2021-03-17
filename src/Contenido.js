import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import ListaItem from "./ListaItem";
import AgregarFetch from "./AgregarFetch";


class Contenido extends React.Component{
  constructor(props) {
    super(props);
    this.state={
		items: [],
		currentItem:{
			text:'',
			key:''
		}
	}
	this.handleInput = this.handleInput.bind(this);
	this.addItem = this.addItem.bind(this);
	this.borrarItem = this.borrarItem.bind(this);
	this.borrarItems = this.borrarItems.bind(this);

	const fetch = require("node-fetch");
	const config = {
	headers: {'Content-Type' :'Application/json'},			
	method: "GET"
	}
//	useEffect(()=>{
	fetch("https://assets.breatheco.de/apis/fake/todos/user/aarontrujill", config)
	.then(respuesta => {return respuesta.json(); {this.state.items.map((elemento, indice) => {
		return <p> {this.elemento.text} </p>
	 })} })
	.then(data => console.log(data))	
	.catch(error => console.error(error))
//	}, [])
//	console.log("realiza get");

    }

	handleInput(e){
		this.setState({
			currentItem:{
				text: e.target.value,
				key: Date.now()  //para que siempre la llave o indice vaya variando y no borre todo
			}
		})
	}

	addItem(e){
		e.preventDefault();
		const newItem = this.state.currentItem;
		console.log("newItem",newItem);	
		if(newItem.text!==""){
			const newItems=[...this.state.items, newItem];  //destructuring para items
	//		let newItems=[];
	//		newItems= newItems.concat(newItem);
			this.setState({
				items: newItems, 
				currentItem:{
					text:'',
					key:''	
				}
			})
		}

		const newItems2=[...this.state.items, newItem];
		//console.log(newItems2);
		const fetch = require("node-fetch");
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
				{label : newItems2 , done: false}
				]),
	//		method: "POST"
			method: "PUT"
	//		method: "GET"
			}
	//	useEffect(()=>{
			fetch("https://assets.breatheco.de/apis/fake/todos/user/aarontrujill", config)
			.then(respuesta => respuesta.json())
			.then(data => console.log(data))	
			.catch(error => console.error(error))
	//	}, [])

	}

	borrarItem(key){
		const borraItem = this.state.items.filter(item => item.key!==key);
		this.setState({items:borraItem})
		
	//	console.log("borraItem", borraItem);
		const fetch = require("node-fetch");
		const config = {
			headers: {'Content-Type' :'Application/json'},	
			body: JSON.stringify([
				{label : borraItem , done: false}
				]),
			method: "PUT"
			}
	//	useEffect(()=>{
			fetch("https://assets.breatheco.de/apis/fake/todos/user/aarontrujill", config)
			.then(respuesta => respuesta.json())
			.then(data => console.log(data))	
			.catch(error => console.error(error))
	//	}, [])
	}

	borrarItems(e) {
		this.setState({ items: []})

		const fetch = require("node-fetch");
		const config = {
			headers: {'Content-Type' :'Application/json'},	
			body: JSON.stringify([
				{label : " " , done: false}
				]),
			method: "PUT"
			}
	//	useEffect(()=>{
			fetch("https://assets.breatheco.de/apis/fake/todos/user/aarontrujill", config)
			.then(respuesta => respuesta.json())
			.then(data => console.log(data))	
			.catch(error => console.error(error))
	//	}, [])

	//	console.log("borrarItems");
	}

	render(){
			return(
				<div className="container">
				  <form id="formulario" onSubmit={this.addItem}>
	              <input type="text" placeholder="Ingrese su tarea" value={this.state.currentItem.text} onChange={this.handleInput}/> &nbsp; &nbsp;	
	              <br />	                              
	              <br />
	              <ListaItem items={this.state.items} 
	              borrarItem={this.borrarItem}> 
	              </ListaItem>
	              <br />
	              </form>
	              <button onClick={this.borrarItems}>Limpiar Todo</button>  
	              <br />   
	            </div>
				);
		}
}

export default Contenido;
