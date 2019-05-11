import React from 'react';
import './GithubUserInfo.css';

export default class GithubUserInfo extends React.Component {

  GITHUB_BASE_USER_API_URL = 'https://api.github.com/users';

  constructor(props) {
    super(props);

    this.state = {
      login: '',
      avatar_url: '',
      name: '',
      joined_date: '',
      bio: '',
      location: '',
      public_repos: 0,
      followers: 0
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.initializeUserInfo(this.state.login);
  }

  initializeUserInfo(login) {
    this.setState({login: ''});
    if (!login) return;
    this.fetchApi(`${this.GITHUB_BASE_USER_API_URL}/${login}`).then(data => {
      this.setState({...data});
      this.setState({joined_date: (new Date(data.created_at)).toDateString()});
    });
  }

  handleSearch(value) {
    this.initializeUserInfo(value);
  }

  fetchApi(url) {
    return fetch(url).then(response => response.json());
  }

  render() {
    let {login, message} = this.state;

    let card =
      <div className="card mb-3 p-2">
        <div className="row no-gutters">
          <div className="col-md-4">
            <div className="inline">
              <img src={this.state.avatar_url} className="card-img" alt="Github Avatar" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">
                { this.state.name }
                <div>
                  <small>
                    (
                      <a href={this.state.html_url} target="_blank" rel="noopener noreferrer">{ this.state.login }</a>
                    )
                  </small>
                </div>
              </h4>
              <div className="card-text text-left">
                <span className="font-weight-bold">Joined date:</span>
                <span> { this.state.joined_date } </span>
              </div>
              <div className="card-text text-left">
                <span className="font-weight-bold">Bio:</span>
                <span> { this.state.bio } </span>
              </div>
              <div className="card-text text-left">
                <span className="font-weight-bold">Location:</span>
                <span> { this.state.location } </span>
              </div>
              <div className="card-text text-left">
                <span className="font-weight-bold">Public repositories:</span>
                <span> { this.state.public_repos } </span>
              </div>
              <div className="card-text text-left">
                <span className="font-weight-bold">Followers:</span>
                <span> { this.state.followers } </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    let noUserFound =
      <div>
        <h3 className="center">No user found...</h3>
      </div>
    return (
      <div className="container-flex text-monospace">
        <div className="row whole-page-height">
          <div className="col"></div>
          <div className="col align-self-center">
            <UserSearch handleSearch={this.handleSearch} />
            {
              login ? card : (message === 'Not Found' ? noUserFound : null)
            }
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value || ''});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group mx-auto">
          <label htmlFor="search" className="sr-only">Search</label>
        <input data-search="search" type="text" className="form-control search-field" value={this.state.value} onChange={this.handleChange} name="search" id="search" placeholder="Search github user..." />
        </div>
        <button type="submit" className="btn btn-primary invisible">
          Search
        </button>
      </form>
    );
  }
}
