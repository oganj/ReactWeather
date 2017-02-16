import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontAwesome from 'react-fontawesome';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  wrapContent:{
  	whiteSpace: 'normal'
  },
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});


var About = React.createClass({
    getInitialState: function () {
        return{
            	fixedHeader: true,
			      fixedFooter: true,
			      stripedRows: false,
			      showRowHover: false,
			      selectable: true,
			      multiSelectable: false,
			      enableSelectAll: false,
			      deselectOnClickaway: true,
			      showCheckboxes: true,
			      height: '300px'
        }
    },

    handleToggle: function (event, toggled) {
        this.setState({
            [event.target.name]: toggled,
        });
    },

	handleChange: function (event) {
        this.setState({
            height: event.target.value
        });
    },

    render: function () {
        return (
           <div>
            <MuiThemeProvider muiTheme={muiTheme.wrapContent}>
             <div>
				<Card initiallyExpanded={true}>
		             <CardText>
			             <Table>
			             <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
			             	<TableRow>
				              <TableHeaderColumn tooltip="R.B.">R.B.</TableHeaderColumn>
			              	  <TableHeaderColumn tooltip="Finkcionlkne celine sklopa" style={styles.wrapContent}>Finkcionlkne celine sklopa</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Slojevi sklopa" style={styles.wrapContent}>Slojevi sklopa</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Debljina dj [cm]" style={styles.wrapContent}>Debljina dj [cm]</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Gustina ϱ [kg/m3]" style={styles.wrapContent}>Gustina ϱ [kg/m3]</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Toplotna provodljiv ʎj [W/mK]" style={styles.wrapContent}>Toplotna provodljiv ʎj [W/mK]</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Specifična toplota C [J/(kgxK)]" style={styles.wrapContent}>Specifična toplota C [J/(kgxK)]</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Koeficijent difuzije vodene pare µ" style={styles.wrapContent}>Koeficijent difuzije vodene pare µ</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Otpornost prolazu toplote sloja Rj [m2K/W]" style={styles.wrapContent}>Otpornost prolazu toplote sloja Rj [m2K/W]</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Otpornost prolazu toplote Rm [m2K/W]" style={styles.wrapContent}>Otpornost prolazu toplote Rm [m2K/W]</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Koeficijent prolaza toplote U [w/m2K]" style={styles.wrapContent}>Koeficijent prolaza toplote U [w/m2K]</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Temperatura na granicama provera kondenzacije θj [C°]" style={styles.wrapContent}>Temperatura na granicama provera kondenzacije θj [C°]</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Temperatura na granicama, raspodela temeperature θj [C°]" style={styles.wrapContent}>Temperatura na granicama, raspodela temeperature θj [C°]</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Parcijalni pritisci vodene pare p [kPa]" style={styles.wrapContent}>Parcijalni pritisci vodene pare p [kPa]</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Pritisci zasićenja vodene pare p [kPa]" style={styles.wrapContent}>Pritisci zasićenja vodene pare p [kPa]</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Difuzija vodene pare Sd=µ*d [m]" style={styles.wrapContent}>Difuzija vodene pare Sd=µ*d [m]</TableHeaderColumn>
		            		</TableRow>
			             </TableHeader>
			             
			             </Table>
		             </CardText>
             	</Card>
            <Card initiallyExpanded={false}>
                <CardHeader
                  title="Konstrukcija"
                  subtitle="analiza gradjevinskih konstrukcija"
                  actAsExpander={true}
                  showExpandableButton={true}
                />
               
                <CardText expandable={true} >
                <Table
		          height={this.state.height}
		          fixedHeader={this.state.fixedHeader}
		          fixedFooter={this.state.fixedFooter}
		          selectable={this.state.selectable}
		          multiSelectable={this.state.multiSelectable}
		        >
		          <TableHeader
		            displaySelectAll={this.state.showCheckboxes}
		            adjustForCheckbox={this.state.showCheckboxes}
		            enableSelectAll={this.state.enableSelectAll}
		          >
		            <TableRow>
		              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
		                Super Header
		              </TableHeaderColumn>
		            </TableRow>
		            <TableRow>
		              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
		              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
		              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
		            </TableRow>
		          </TableHeader>
		          <TableBody
		            displayRowCheckbox={this.state.showCheckboxes}
		            deselectOnClickaway={this.state.deselectOnClickaway}
		            showRowHover={this.state.showRowHover}
		            stripedRows={this.state.stripedRows}
		          >
		            {tableData.map( (row, index) => (
		              <TableRow key={index} selected={row.selected}>
		                <TableRowColumn>{index}</TableRowColumn>
		                <TableRowColumn>{row.name}</TableRowColumn>
		                <TableRowColumn>{row.status}</TableRowColumn>
		              </TableRow>
		              ))}
		          </TableBody>
		          <TableFooter
		            adjustForCheckbox={this.state.showCheckboxes}
		          >
		            <TableRow>
		              <TableRowColumn>ID</TableRowColumn>
		              <TableRowColumn>Name</TableRowColumn>
		              <TableRowColumn>Status</TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
		                Super Footer
		              </TableRowColumn>
		            </TableRow>
		          </TableFooter>
		        </Table>

		        <div style={styles.propContainer}>
		          <h3>Table Properties</h3>
		          <TextField
		            floatingLabelText="Table Body Height"
		            defaultValue={this.state.height}
		            onChange={this.handleChange}
		          />
		          <Toggle
		            name="fixedHeader"
		            label="Fixed Header"
		            onToggle={this.handleToggle}
		            defaultToggled={this.state.fixedHeader}
		          />
		          <Toggle
		            name="fixedFooter"
		            label="Fixed Footer"
		            onToggle={this.handleToggle}
		            defaultToggled={this.state.fixedFooter}
		          />
		          <Toggle
		            name="selectable"
		            label="Selectable"
		            onToggle={this.handleToggle}
		            defaultToggled={this.state.selectable}
		          />
		          <Toggle
		            name="multiSelectable"
		            label="Multi-Selectable"
		            onToggle={this.handleToggle}
		            defaultToggled={this.state.multiSelectable}
		          />
		          <Toggle
		            name="enableSelectAll"
		            label="Enable Select All"
		            onToggle={this.handleToggle}
		            defaultToggled={this.state.enableSelectAll}
		          />
		          <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
		          <Toggle
		            name="deselectOnClickaway"
		            label="Deselect On Clickaway"
		            onToggle={this.handleToggle}
		            defaultToggled={this.state.deselectOnClickaway}
		          />
		          <Toggle
		            name="stripedRows"
		            label="Stripe Rows"
		            onToggle={this.handleToggle}
		            defaultToggled={this.state.stripedRows}
		          />
		          <Toggle
		            name="showRowHover"
		            label="Show Row Hover"
		            onToggle={this.handleToggle}
		            defaultToggled={this.state.showRowHover}
		          />
		          <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
		          <Toggle
		            name="showCheckboxes"
		            label="Show Checkboxes"
		            onToggle={this.handleToggle}
		            defaultToggled={this.state.showCheckboxes}
		          />
		          </div>
                </CardText>
            </Card>
		        </div>
        	
        </MuiThemeProvider>
      </div>
        );
    }
});

module.exports = About;