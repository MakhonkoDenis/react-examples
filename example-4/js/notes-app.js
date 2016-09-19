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
		componentDidMount: function(){
			//init other scripts
			var htmlElement = this.refs.htmlElement;
		},
		render: function() {
			var title = this.props.title + ' - ' + this.props.id;

			return (
				<div className="note" title={ title } ref="htmlElement">
					<h2 style={ style.h2 }> { this.props.title } </h2>
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
		handlerNoteAdd: function( newNote ){
			var newNotes = this.state.notes;

			newNotes.unshift( newNote );
			this.setState( { notes: newNotes } );
		},
		render: function() {
			return (
				<div className="notes-app">
					<NoteEditor onNoteAdd={this.handlerNoteAdd}/>
					<NotesGrid notes={ this.state.notes } />
				</div>
			)
		}
	} );

	var NoteEditor = React.createClass( {
		getInitialState: function() {
			return{
				text:''
			}
		},
		handlerTextChange: function( event ) {
			this.setState( { text: event.target.value } );
		},
		handlerNoteAdd: function() {
			var newNote ={
				text: this.state.text,
				title: 'new title',
				id: Date.now()
			}

			this.props.onNoteAdd( newNote );
			this.setState( { text: '' } );
		},
		render: function() {
			return (
				<div>
					<textarea
						placeholder="enter your note here..."
						value={this.state.text}
						onChange={this.handlerTextChange}
					/>
					<button onClick={this.handlerNoteAdd}>add</button>
				</div>
			)
		}
	});

	ReactDOM.render(
		<NotesApp />,
		document.getElementById('mount-point')
	);
//} () )
