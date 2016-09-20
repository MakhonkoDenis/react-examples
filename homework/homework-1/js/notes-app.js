( function( window ){
	var Comment = React.createClass( {
		render: function(){
			return (
				<div>
					<h2 classNmae='title'>{this.props.title}</h2>
					<span classNmae='author'>{this.props.author}</span>
					<span classNmae='comment'>{this.props.children}</span>
				</div>
			);
		}
	} ),
	CommentList = React.createClass( {
		getInitialState: function() {
			return {
				comments: [
					{
						id:0,
						title: 'Bla bla title',
						author: 'Behaart',
						comment:'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
					},
					{
						id:1,
						title: 'Bla bla title',
						author: 'Behaart',
						comment:'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
					},
				]
			};
		},
		render: function() {
			return (
				<div>
					{
						this.state.comments.map( function( element ) {
							return ( <Comment key={ element.id } id={ element.id } author={ element.author } title={ element.title }>{ element.comment }</Comment> );
						})
					}
				</div>
			);
		}
	} );

	ReactDOM.render(
		<CommentList />,
		document.getElementById('content')
	)
}( window ) )
