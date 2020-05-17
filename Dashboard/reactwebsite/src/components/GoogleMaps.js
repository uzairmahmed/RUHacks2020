import React, { Component } from 'react';

export default class GoogleMaps extends Component {
	render() {
		return (
			<div class="col">
				<iframe
					allowfullscreen=""
					frameborder="0"
					src="https://cdn.bootstrapstudio.io/placeholders/map.html"
					id="map"
					width="100%"
					height="400"
				/>
			</div>
		);
	}
}
