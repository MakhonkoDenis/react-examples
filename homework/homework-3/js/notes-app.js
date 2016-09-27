( function( window ){
	const CONTACTS = [
				{
					id: 1,
					name: 'Denis',
					phoneNumber: '+38096751343',
					image: 'https://avatars0.githubusercontent.com/u/4941839?v=3&s=466',
					description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
				},
				{
					id: 2,
					name: 'Stepan',
					phoneNumber: '+38096751343',
					image: 'https://avatars2.githubusercontent.com/u/6247069?v=3&s=400',
					description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
				},
				{
					id: 3,
					name: 'Andrey',
					phoneNumber: '+38096751343',
					image: 'https://avatars3.githubusercontent.com/u/4987981?v=3&s=400',
					description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
				},
				{
					id: 4,
					name: 'Dimon',
					phoneNumber: '+38096751343',
					image: 'https://avatars2.githubusercontent.com/u/2461627?v=3&s=400',
					description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
				}
			];

	var Contact = React.createClass( {
			getInitialState: function() {
				return {
					isOpen: false,
				};
			},
			render: function() {
				return (
					<li className="contact" onClick={ this.onClickHandler }>
						<img src={ this.props.url } alt={this.props.name} />
						<h2 className="user-name">{ this.props.name }</h2>
						<i className="icon fa fa-arrow-down" aria-hidden="true"></i>
							{ this.state.isOpen ? <div>{ this.props.phone }</div> : '' }
							{ this.state.isOpen ? <div className='description'>{ this.props.description }</div> : '' }
					</li>
				);
			},
			onClickHandler:function() {
				var newState = ( this.state.isOpen ) ? false : true ;

				console.log(newState);
				this.setState({
					isOpen: newState
				})
			}
		} ),
		ContactList = React.createClass( {
			getDefaultProps: function() {
				return {
					contacts:CONTACTS
				}
			},
			render: function() {
				return (
					<ul className="contact-list">
						{
							this.props.contacts.map( function( element ){
								return <Contact
									key = { element.id }
									name = { element.name }
									url = { element.image }
									phone = { element.phoneNumber }
									description = { element.description }
									/>;
							} )
						}
					</ul>
				);
			}
		} );

	ReactDOM.render(
		<ContactList />,
		document.getElementById( 'content' )
	)

}( window ) )
