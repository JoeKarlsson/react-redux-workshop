import React, { Component } from 'react';
import Page from './Page';

class PageContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts : [],
			error: false,
			loading: false,
    }
  };

	componentDidMount() {
		this.setState({ loading: true });

		this.loadDataFromReddit()
			.then(posts => {
				if(!posts) {
					this.setState({
						loading: false,
						error: true,
					});
					return [];
				}
				return this.setState({
					posts,
					loading: false,
				});
			})
			.catch(err => {
				this.onError(err);
			})
	};

	onError(err) {
		this.setState({
			loading: false,
			error: true,
		});
		console.error(err.toString());
	};

	loadDataFromReddit () {
		const url = 'https://www.reddit.com/r/Showerthoughts.json';
		return fetch(url)
			.then((response) => {
				return response.json();
			})
			.then(posts => {
				return posts.data.children;
			})
			.catch(err => {
				this.onError(err);
			})
	};

  render() {
		const {
			posts,
			loading,
			error,
		} = this.state;

    return (
      <div>
        <Page
					posts={posts}
					loading={loading}
					error={error}
				/>
      </div>
    )
  }
};

export default PageContainer;
