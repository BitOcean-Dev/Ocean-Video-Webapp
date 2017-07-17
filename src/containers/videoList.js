import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Grid, Row, Col, Table } from 'react-bootstrap';
import VideoCell from './VideoCell';
import { fetchVideoList } from 'actions/videoList'


class VideoList extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchVideoList());
    }

    props = {
        data: [],
        loaded: false
    };

    render() {
        var videoTable = dataToVideoTable(this.props.data, 4);
        return <Grid>
            <Row>
                <Col xs={1} md={1}/>
                <Col xs={10} md={10}>
                    <Table>
                        <tboby>
                            {videoTable}
                        </tboby>
                    </Table>
                </Col>
                <Col xs={1} md={1}/>
            </Row>
        </Grid>
    }
}

function dataToVideoTable(list, colPerRow) {
    const addRowToRows = (row, rows) => {
        rows.push(
            <tr>{row}</tr>
        )
    };

    const rows = [];
    let row = [];

    let curr = 0;
    list.forEach((video)=> {
        row.push(<td>
                <VideoCell vid={video.vid} key={video.vid} name={video.name} price={video.price} imageUrl={video.imageUrl}/>
            </td>);
        curr++;
        if (curr == colPerRow) {
            addRowToRows(row, rows);
            row = [];
            curr = 0
        }
    });
    rows.push(<tr>{row}</tr>);
    return rows;
}

function mapStateToProperties(state) {
    return {
        status: state.videoList.status,
        data: state.videoList.data
    };
}

export default connect(mapStateToProperties)(VideoList);