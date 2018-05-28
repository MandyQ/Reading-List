import React, { Component } from 'react'



export default class Header extends Component {
	render() {
		return(
			<div class="ui inverted menu">
				<div class="header item">Brand</div>					
				<div class="right menu">
					<div class="item">
						<div class="ui transparent inverted icon input">
							<i class="search icon"></i>
							<input type="text" placeholder="Search"/>
						</div>
					</div>
					<a class="item">Link</a>
				</div>
			</div>
		)
	}
}