import React, { Component } from 'react';

export default class StoreName extends Component {
	render() {
		return (
			<div class="col-sm-6 col-md-5 col-lg-4 col-xl-8 item">
				<div class="box">
					<i class="fas fa-store-alt icon" style={{ color: this.props.color, marginBottom: 15 }} />
					<h1 id="store-name" class="name">
						{this.props.name || 'Home Depot'}
					</h1>
					<p id="store-desc" class="description">
						{this.props.desc || '1013 Maple Avenue, Milton'}
					</p>
					<a class="learn-more" href="#" />
				</div>
			</div>
		);
	}
}
