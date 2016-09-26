( function( window ){
	var InputModule = React.createClass( {
		getDefaultProps: function(){
			return {
				text: 'Hello world'
			}
		},
		getInitialState: function(){
			return {
				text: this.props.text
			}
		},
		render: function(){
			return (
				<div className="input-holder">
					<input onChange={ this.changeHandler } placeholder={ this.props.text }/>
					<span>{ this.state.text }</span>
				</div>
			);
		},
		changeHandler: function( event ){
			var value = event.target.value ? event.target.value : this.props.text ;
			this.setState({
				text: value
			});
		}
	} )

	ReactDOM.render(
		<InputModule/>,
		document.getElementById('content')
	)
}( window ) )
