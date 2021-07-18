import React from "react";
import "../../App.css";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(fees, schedule, description) {
  return { fees, schedule, description};
}

const rows = [
  createData('$100', 'Upfront', 'Establishment Fee'),
  createData('$50', 'Where applicable', 'Early Termination Fee'),
  createData('$15', 'Where applicable','Missed payment'),
  createData('$10', 'Where applicable', 'Default fee. Per month until the loan is paid')
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});




function PDS() {
  const classes = useStyles();  



return (


    <div className="pds-container">
      <h1 className="pds">Product Disclosure Statement</h1>
      <div className="pds-info">
        <h2>Our Product</h2>
        <h3>NON NCCP REGULATED LOANS</h3>
        <p>
        We only offer business or non-consumer loans. This means that consumer protection

under the NCCP Act 2009 may not apply to you if you sign a contract with us. Other
protection may still apply arising from our obligations upon signing your contract.
        </p>
        <br></br>
        <h3>INTEREST</h3>
        <p>
        We charge the borrower interest rate of 4% per month base on Annual Percentage
Rate (APR) of 48% for each loan spread over the term of loan.
        </p>
     
      <br></br>
     
      <h3>FEES</h3>
        <p>
        To enable us to process your application, DEL Finance may charge the following fees:
        </p>  
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Fees</StyledTableCell>
            <StyledTableCell align="left">Schedule</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.fees}>
              <StyledTableCell component="th" scope="row">
                {row.fees}
              </StyledTableCell>
              <StyledTableCell align="left">{row.schedule}</StyledTableCell>
              <StyledTableCell align="left">{row.description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
 
     
      <br></br>
     
      <h3>DIRECT DEBIT</h3>
        <p>
        Direct debit arrangement is set up before the loan is drawn. DEL Finance is partnered
with 3rd party direct debit service providers. We may share your personal information
to 3rd party for the purposes of setting up your direct debit.
        </p>  
        <p>These service providers will charge missed payment fees for each failed direct debit
transaction. It is your responsibility to ensure that there are sufficient clear funds in
your nominated account to allow debit payment to be processed when repayments
are due.</p>
        <p>Any loss suffered or incurred due to the actions made by 3rd party vendors will not be
indemnified by DEL Finance. DEL Finance will endeavour to assist you for any
complaints arising from the services provided by these external vendors.
        </p>    
      
      <br></br>
      
      <h3>DEFAULT</h3>
        <p>
        In the event of default, DEL Finance will charge default payment fees of $10 per month until the loan amount is paid. DEL Finance can waive the default payment fees if you inform us in advance of the impending default
        </p>  
        <p>You must pay us immediately the balance of the loan plus any interest outstanding.</p>
     
      <br></br>
     
      <h3>DEFAULT NOTICE</h3>
        <p>
        DEL Finance will serve a notice before it can exercise any of its rights on the default.
The default notice will be in writing specifying the default and state that DEL Finance
will exercise its rights under the Agreement unless the default is remedied within 24
days.
        </p>  
     
      <br></br>
    
      <h3>VARIATION OF CONTRACT</h3>
        <p>
        DEL Finance may elect to vary your contract if we deemed that the current contract
requires rectification or amendment to reflect the pre contractual agreement. DEL
Finance will notify you of the variation in writing and fees will be waived if the variation
is initiated by us.
        </p>  
        <p>You may elect to vary your contract if you wish to request for limit increase, or extend
your loan term. Fees may be applicable if the variation on the contract will involve
substantial change amounting to a new contract.</p>
        <p>Any loss arising from the variation of contract will not be indemnified by DEL Finance.
DEL Finance does not offer guarantee or warranty that variation of the loan contract
will be beneficial to you.</p>    
      
      <br></br>
    
      <h3>COMPLAINTS AND DISPUTE RESOLUTION</h3>
        <p>
        You may advise your complaints in writing and we will endeavour to address your issue
within 1-2 business days.
        </p>  
        <p>If you are unhappy of the outcome, you may elect to have a face to face meeting with
our representative. We will endeavour to negotiate a fair outcome for both parties for
the resolution of your complaints.</p>
        <p>If you are still not satisfied with the outcome after the meeting, you may pursue all
legal avenues available to you which you deem appropriate.</p>    
        <p>DEL Finance reserves all rights to pursue all legal avenues to enforce valid contracts
without prejudice to our rights arising from the contracts.</p>    
      </div>
      </div>

    
); 
  


}
export default PDS;