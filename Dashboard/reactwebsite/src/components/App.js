import React, { Component } from 'react';
import '../css/styles.css';
import GoogleMaps from './GoogleMaps';
import Products from './Products';
import StoreName from './StoreName';
import Requests from './Items';
import API from '../api';
const color = '#70c1b3';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			currentStore: 'ChIJqTmMY_9uK4gR_qBXJtlL8KA'
			
		};
	}
	componentDidMount() {
		API.post(`dashboard/get-products/?place_id=${this.state.currentStore}`, {}).then(({ data }) => {
			this.setState({ items: data });
		});
	}
	refresh = () => {
		API.post(`dashboard/get-products/?place_id=${this.state.currentStore}`, {}).then(({ data }) => {
			this.setState({ items: data });
		});
	};
	render() {
		return (
			<div>
				{/* // <!-- Start: Features Boxed --> */}
				<div class="features-boxed">
					<div class="container">
						{/* <!-- Start: Navigation with Search --> */}
						<nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
							<div class="container">
								<a class="navbar-brand" href="#">
									Inventory Investigator
								</a>
								<button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
									<span class="sr-only">Toggle navigation</span>
									<span class="navbar-toggler-icon" />
								</button>
								<div class="collapse navbar-collapse" id="navcol-1">
									<ul class="nav navbar-nav" />
									<form class="form-inline mr-auto" target="_self">
										<div class="form-group">
											<label for="search-field" />
										</div>
									</form>
								</div>
							</div>
						</nav>
						{/* <!-- End: Navigation with Search --> */}
						{/* <!-- Start: Intro --> */}
						<div class="intro">
							<p class="text-center" />
						</div>
						{/* <!-- End: Intro --> */}
						{/* <!-- Start: Features --> */}
						<div class="row justify-content-center features">
							<StoreName
								color={color}
								// name="Costco.js" desc="No Description"
							/>
							<GoogleMaps color={color} />
							<Products
								refresh={this.refresh}
								storeID={this.state.currentStore}
								color={color}
								items={this.state.items}
							/>
							<Requests color={color} items={this.state.items} />

							<div class="clearfix" />
						</div>
						{/* <!-- End: Features --> */}
					</div>
				</div>
			</div>
		);
	}
}
