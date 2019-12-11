import React, {Component} from 'react';
import styled from "styled-components";
import Box from 'react-styled-box';

export default class CardHead extends Component {
    render() {
        return(
            <div style={styles.container}>
                <div style={styles.circle}>
                    {/* <h6>a</h6> */}
                </div>
                <div style={styles.textContainer}>
                    <b><h1>{this.props.title}</h1></b>
                    <h2>{this.props.name}</h2>
                </div>
            </div>
        );
    }
}


const styles = {
    container: {
        display: 'flex',
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: '#524e4e',
        flexDirection: "row",
        width: "400px",
        alignItems: 'center',
        height: "200px",
        margin: 60,
        backgroundColor: "white"
    },
    circle: {
        display: 'flex',
        borderStyle: "solid", 
        borderWidth: "1px", 
        borderColor: '#000000', 
        width: "100px", 
        height:"100px", 
        borderRadius: "50%", 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: "5%",
        marginRight: "10%"
    },
    textContainer: {
        // paddingVertical: "50%"   
    }
}