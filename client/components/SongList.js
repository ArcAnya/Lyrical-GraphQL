import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from '@apollo/client';

class SongList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                SongList
            </div>
        );
    }
}

const query = gql`
    {
        songs {
            title
        }
    }
`;

export default graphql(query)(SongList); // graphql(query) invokes a function, then immediately used by SongList