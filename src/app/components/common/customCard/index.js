import React from 'react';

const CustomCard = ({title, desc}) => {

	return Object.assign({}, React.Component.prototype, {

		render() {
			let paperSyles = {
				height: 100,
				width: 300,
				margin: 20,
				display: 'flex',
				flexDirection: 'column',
				borderLeft: '5px solid black',
				background: 'steelblue',
				color: 'white'
			};

			let content =
				<div className="custom-card-paper" style={paperSyles}>
					<h2 className="title">{title}</h2>
					<h4 className="desc">{desc}</h4>
				</div>;

			return content;
		}

	});

};

export default CustomCard;
