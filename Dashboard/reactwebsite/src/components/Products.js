import React, { Component } from 'react';
import API from '../api';
export default class Products extends Component {
	componentDidUpdate(prevProps) {
		if (prevProps === this.props) {
			return;
		}
		let stock = {};
		var x;
		for (x of this.props['items']) {
			stock[x['name']] = x['supply'];
		}
		this.setState(stock);
	}
	constructor(props) {
		super(props);
		this.state = {
			form: ''
		};
	}
	renderTop = () => {
		return (
			<div>
				<i className="fa fa-shopping-cart icon" style={{ color: this.props.color, marginBottom: 15 }} />
				<h3 className="name">Products in Stock</h3>
				<input
					type="search"
					id="search-bar-2"
					style={{ padding: 1, marginBottom: 16, marginRight: 12, marginTop: 7 }}
					onChange={(e) => {
						this.setState({ form: e.target.value });
					}}
				/>
				<button
					className="btn btn-primary border rounded-circle"
					id="search-button-2"
					type="submit"
					style={{ backgroundColor: this.props.color }}
				>
					<i className="fa fa-search" />
				</button>
			</div>
		);
	};
	renderTable = () => {
		return (
			<div className="table-responsive">
				<table className="table" id="table-1">
					<thead>
						<tr>
							<th style={{ width: 26 }} />
							<th style={{ width: 188 }}>Item Name</th>
							<th># in Stock</th>
							<th style={{ width: 60 }} />
						</tr>
					</thead>
					<tbody>
						{this.props.items
							.filter(({ name }) => {
								return name.includes(this.state.form);
							})
							.map((product) => {
								return (
									<tr id={product.name}>
										<td>
											<i className={product.icon} />
										</td>
										<td style={{ width: 129 }}>{product.name}</td>
										<td>{product.supply}</td>
										<td>
											<input
												type="number"
												style={{ width: 50 }}
												onChange={(e) => {
													let dd = {};
													if (e.target.value > 0) {
														dd[product['name']] = e.target.value;
													} else {
														dd[product['name']] = 0;
													}
													this.setState(dd);
												}}
											/>
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		);
	};
	render() {
		return (
			<div className="col-sm-6 col-md-5 col-lg-4 col-xl-6 item">
				<div className="box">
					{this.renderTop()}
					{this.renderTable()}
					<p className="description" />
					<button
						className="btn btn-primary"
						id="edit-supply"
						type="button"
						style={{ backgroundColor: this.props.color }}
						onClick={() => {
							var x;
							for (x of this.props.items) {
								if (this.state[x['name']]) {
									API.post(
										`/dashboard/update-supply/?place_id=${this.props.storeID}&item=${x[
											'name'
										]}&supply=${this.state[x['name']]}`
									);
								}
							}
							this.props.refresh();
						}}
					>
						Edit Supply
					</button>
				</div>
			</div>
		);
	}
}
