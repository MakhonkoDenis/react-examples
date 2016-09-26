( function( window ){
	const CONTACTS = [
				{
					id: 1,
					name: 'Denis',
					phoneNumber: '+38096751343',
					image: 'https://avatars0.githubusercontent.com/u/4941839?v=3&s=466'
				},
				{
					id: 2,
					name: 'Stepan',
					phoneNumber: '+38096751343',
					image: 'https://avatars2.githubusercontent.com/u/6247069?v=3&s=400'
				},
				{
					id: 3,
					name: 'Andrey',
					phoneNumber: '+38096751343',
					image: 'https://avatars3.githubusercontent.com/u/4987981?v=3&s=400'
				},
				{
					id: 4,
					name: 'Dimon',
					phoneNumber: '+38096751343',
					image: 'https://avatars2.githubusercontent.com/u/2461627?v=3&s=400'
				}
			];

	var Contact = React.createClass( {
			render: function() {
				return (
					<li className="contact">
						<img src={ this.props.url } alt={this.props.name} />
						<span className="user-name">{ this.props.name }</span>
					</li>
				);
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
								console.log(element.id);
								console.log(element.image);
								return <Contact
									key = { element.id }
									name = { element.name }
									url = { element.image }
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
