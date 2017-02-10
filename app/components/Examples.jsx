import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontAwesome from 'react-fontawesome';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});


var Examples = React.createClass({
    getInitialState: function () {
        return{
            value:'a'
        }
    },

    handleChange: function (value) {
        this.setState({
            value: value,
        });
    },

    render: function () {
        return (
            <div>
         
            <MuiThemeProvider muiTheme={muiTheme}>
            <Card initiallyExpanded={true}>
                <CardHeader
                  title="Projekat"
                  subtitle="podaci o projektu i zgradi"
                  actAsExpander={true}
                  showExpandableButton={true}
                />
               
                <CardText expandable={true} >
                 <Tabs value={this.state.value} onChange={this.handleChange} >
                            <Tab label="Podaci o projektu" value="a" >
                                <div>
                                 
                                    <h2 style={styles.headline}>Controllable Tab A</h2>
                                    <p>
                                    
                                        Tabs are also controllable if you want to programmatically pass them their values.
                                        This allows for more functionality in Tabs such as not
                                        having any Tab selected or assigning them different values.
                                    </p>
                                </div>
                            </Tab>
                            <Tab label="Komentar" value="b">
                                <div>
                                    <h2 style={styles.headline}>Controllable Tab B</h2>
                                    <p>
                                        This is another example of a controllable tab. Remember, if you
                                        use controllable Tabs, you need to give all of your tabs values or else
                                        you wont be able to select them.
                                    </p>
                                </div>
                            </Tab>
                            <Tab label="Slika situacionog plana" value="c">
                                <div>
                                    <h2 style={styles.headline}>Controllable Tab C</h2>
                                    <p>
                                        This is another example of a controllable tab. Remember, if you
                                        use controllable Tabs, you need to give all of your tabs values or else
                                        you wont be able to select them.
                                    </p>
                                </div>
                            </Tab>
                        </Tabs>
                </CardText>
            </Card>
            
            </MuiThemeProvider>
            </div>
        );
    }
});

module.exports = Examples;