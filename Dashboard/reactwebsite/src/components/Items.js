import React, { Component } from 'react';
export default class Requests extends Component {
	componentDidMount() {}
	constructor(props) {
		super(props);
		this.state = {
			form: ''
		};
	}
	// addRequest = (item) => {
	// 	let store = this.state.requests;
	// 	store.push(item);
	// 	this.setState({ requests: store });
	// };
	renderTable = () => {
		return (
			<div className="table-responsive">
				<table className="table" id="table-2">
					<thead>
						<tr>
							<th style={{ width: 26 }} />
							<th>Item Name </th>
							<th># of Request</th>
						</tr>
					</thead>
					<tbody>
						{this.props.items
							.filter(({ name }) => {
								return name.includes(this.state.form);
							})
							.map((request) => {
								return (
									<tr>
										<td>
											<i className={request.icon} />
										</td>
										<td>{request.name}</td>
										<td>{request.demand}</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		);
	};
	renderHeader = () => {
		return (
			<div>
				<i className="fa fa-question-circle icon" style={{ color: this.props.color, marginBottom: 15 }} />
				<h3 className="name">Items Requests at this Location</h3>
				<input
					type="search"
					id="search-bar-3"
					style={{ marginTop: 7, marginRight: 12, marginBottom: 16, padding: 1 }}
					onChange={(e) => {
						this.setState({ form: e.target.value });
					}}
				/>
				<button
					className="btn btn-primary border rounded-circle"
					id="search-button-3"
					type="button"
					style={{ backgroundColor: this.props.color }}
				>
					<i className="fa fa-search" />
				</button>
			</div>
		);
	};
	render() {
		return (
			<div className="col-sm-6 col-md-5 col-lg-4 col-xl-6 item">
				<div className="box">
					{this.renderHeader()}
					{this.renderTable()}
				</div>
			</div>
		);
	}
}
