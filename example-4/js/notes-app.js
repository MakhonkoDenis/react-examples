///( function() {
	var style = {
		h2: {
			color: "#5a5a5a",
			backgroundColor: '#007cff'
		},
		p: {
			color: "#5a5a5a",
			backgroundColor: '#00ff97'
		}
	}
	var Note = React.createClass( {
		render: function() {
			var title = this.props.title + ' - ' + this.props.id;
			console.log(this.props)
			return (
				<div className="note" title={ title }>
					<h2 style={ style.h2 }>{ this.props.title }</h2>
					<p style={ style.p }>{ this.props.children }</p>
				</div>
			);
		}
	} );

	var NotesGrid = React.createClass( {
		render: function() {
			return (
				<div className="notes-grid">
					{
						this.props.notes.map( function( note ) {
							return ( <Note key={note.id} id={note.id} title={note.title}>{note.text }</Note> );
						} )
					}
				</div>
			);
		}
	} );

	var NotesApp = React.createClass( {
		getInitialState: function() {
			return {
				notes: [
					{
						id:0,
						title: 'Bla bla title',
						text:'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
					},
					{
						id:1,
						title: 'Bla bla title',
						text:'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
					},
					{
						id:2,
						title: 'Bla bla title',
						text:'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
					},
					{
						id:3,
						title: 'Bla bla title',
						text:'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
					},
					{
						id:4,
						title: 'Bla bla title',
						text:'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
					},
					{
						id:5,
						title: 'Bla bla title',
						text:'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
					},
				]
			}
		},
		render: function() {
			return (
				<div className="notes-app">
					<NotesGrid notes={ this.state.notes } />
				</div>
			)
		}
	} );

	ReactDOM.render(
		<NotesApp />,
		document.getElementById('mount-point')
	);
//} () )
