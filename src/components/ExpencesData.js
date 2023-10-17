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
        <>
        <Link to = '/RegistrationForm'><Button variant="contained">Add Expences</Button></Link>
        <TableContainer style={{width: '60%', marginTop: '50px'}}>
            <Table variant = 'filled'>
                <TableHead>
                    <TableRow >
                        <TableCell style={{fontSize: '22px', color: '#fff'}}>Expences Name</TableCell>
                        <TableCell style={{fontSize: '22px', color: '#fff'}}>Expences Price</TableCell>
                        <TableCell style={{fontSize: '22px', color: '#fff'}}>Expences Date</TableCell>
                        <TableCell style={{fontSize: '22px', color: '#fff'}}>Expences Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.expences.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell style={{fontSize: '18px', color: '#fff'}}>{item.itemName}</TableCell>
                            <TableCell style={{fontSize: '18px', color: '#fff'}}>{item.itemPrice + ' Rs/-'}</TableCell>
                            <TableCell style={{fontSize: '18px', color: '#fff'}}>{item.itemDate}</TableCell>
                            <TableCell style={{fontSize: '18px', color: '#fff'}}>{item.itemTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={2} style={{fontSize: '22px', color: '#fff', textAlign: 'center'}} >Total</TableCell>
                        <TableCell colSpan={2} style={{fontSize: '22px', color: '#fff', textAlign: 'center'}}>{totalPrice + ' Rs/-'}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
        </>
    )
}