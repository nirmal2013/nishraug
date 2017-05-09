import React from 'react';
import CustomCard from 'app/components/common/customCard';

const Home = () => {

	return Object.assign({}, React.Component.prototype, {

		componentWillMount() {
			this.state = {};
		},

		render() {

			return <div>
					<CustomCard
						key={0}
						title="Sample Card"
						desc="Here goes the details of the card."
					/>
				</div>;
		}

	});

};

Home.propTypes = {
	store: React.PropTypes.object
};

export default Home;
