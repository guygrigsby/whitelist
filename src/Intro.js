import React from 'react';
import Typography from '@material-ui/core/Typography';
import intro from './markdown/intro.md';
import ReactMarkdown from 'react-markdown';

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      text: '',
    };
  }
  async load() {
    fetch(intro)
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        this.setState(() => {
          return { text };
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ loaded: true });
  }
  render() {
    if (!this.state.loaded) {
      this.load();
    }
    return (
      <Typography variant="body2" align="justify">
        <ReactMarkdown source={this.state.text} />
      </Typography>
    );
  }
}

export default Introduction;
