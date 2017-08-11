import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import VideoCell from './VideoCell';
import OptionBar from './optionBar';
import Pagination from './pagination';
import { fetchVideoList } from 'actions/videoList';

class VideoList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchVideoList());
  }

  props = {
    data: [],
    loaded: false
  };

  render() {
    return (
      <div>
        <OptionBar />
        <div className="row-fluid" id="playlistContainer">
          <ul className="thumbnails" id="playlist">
            {dataToVideoList(this.props.data)}
          </ul>
        </div>
        <Pagination />
      </div>
    );
  }
}

function dataToVideoList(list) {
  return list.map(
    (video) => <VideoCell vid={video.vid} key={video.vid} name={video.name} price={video.price} imageUrl={video.link} describe={video.describe}/>
  );
}

function mapStateToProperties(state) {
  return {
    status: state.videoList.status,
    data: state.videoList.data
  };
}

export default connect(mapStateToProperties)(VideoList);
