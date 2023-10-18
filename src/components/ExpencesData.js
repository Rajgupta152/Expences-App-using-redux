import { TableContainer, Table, TableRow, TableHead, TableBody, TableCell, Button, TableFooter } from "@mui/material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
export const ExpencesData = () => {
    const data = useSelector((state) => state);
    // console.log(data.expences)
    let totalPrice = 0;
    data.expences.map((item) => {
        return totalPrice += +item.itemPrice
    })
    return(
        <div className="table-wrapper">
        <Link style={{float: 'left'}} to = '/RegistrationForm'><Button variant="contained">Add Expences</Button></Link>
        <TableContainer style={{marginTop: '70px',border: "2px solid rgb(0, 42, 255", backgroundColor: 'rgba(28, 20, 28, 0.5)'}} >
            <Table variant = 'filled'>
                <TableHead >
                    <TableRow >
                        <TableCell style={{fontSize: '20px', color: '#1976D2'}}>S. No.</TableCell>
                        <TableCell style={{fontSize: '20px', color: '#1976D2'}}>Person Name</TableCell>
                        <TableCell style={{fontSize: '20px', color: '#1976D2'}}>Expences Name</TableCell>
                        <TableCell style={{fontSize: '20px', color: '#1976D2'}}>Expences Price</TableCell>
                        <TableCell style={{fontSize: '20px', color: '#1976D2'}}>Expences Date</TableCell>
                        <TableCell style={{fontSize: '20px', color: '#1976D2'}}>Expences Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {data.expences.map((item,index) => (
                        <TableRow key={item.id}>
                            <TableCell style={{fontSize: '18px', color: '#fff'}}>{index + 1}</TableCell>
                            <TableCell style={{fontSize: '18px', color: '#fff'}}>{item.personName}</TableCell>
                            <TableCell style={{fontSize: '18px', color: '#fff'}}>{item.itemName}</TableCell>
                            <TableCell style={{fontSize: '18px', color: '#fff'}}>{item.itemPrice + ' Rs/-'}</TableCell>
                            <TableCell style={{fontSize: '18px', color: '#fff'}}>{item.itemDate}</TableCell>
                            <TableCell style={{fontSize: '18px', color: '#fff'}}>{item.itemTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter >
                    <TableRow >
                        <TableCell colSpan={3} style={{fontSize: '20px', color: 'green', textAlign: 'center'}} >Total</TableCell>
                        <TableCell colSpan={3} style={{fontSize: '20px', color: 'green', textAlign: 'center'}}>{totalPrice + ' Rs/-'}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
        </div>
    )
}