import { TextField, FormControl, Button } from "@mui/material"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { updateItem, updatePrice, updateDate, updateTime, addExpences, resetForm } from "./action";
import { Link } from "react-router-dom";

export const RegistrationForm = () => {

    const values = useSelector((state) => state);
    const dispatch = useDispatch();
    const data = {
        id: Math.random().toString(),
        itemName: values.itemName,
        itemPrice: values.itemPrice,
        itemDate: values.itemDate,
        itemTime: values.itemTime

    }

    const handleItemName = (e) => {
        dispatch(updateItem(e.target.value))
    }
    const handleItemPrice = (e) => {
        dispatch(updatePrice(e.target.value))
    }
    const handleItemDate = (e) => {
        dispatch(updateDate(e.target.value))
    }
    const handleItemTime = (e) => {
        dispatch(updateTime(e.target.value))
    }

    const handleClick = () => {
        console.log(values);
        dispatch(addExpences(data))
        dispatch(resetForm())

    }

    return(
        <div className="container">
        <h1>Expences Form</h1>
        <FormControl>
            <TextField style={{marginTop: '20px', width: '400px'}} value={values.itemName} type="text" label="Item name" variant="filled" onChange={handleItemName} />
            <TextField style={{marginTop: '20px', width: '400px'}} value={values.itemPrice} type="number" label="Item price" variant="filled" onChange={handleItemPrice} />
            <TextField style={{marginTop: '20px', width: '400px'}} value={values.itemDate} type="date"  variant="filled" onChange={handleItemDate} />

            <TextField style={{marginTop: '20px', width: '400px'}} value={values.itemTime} type="time"  variant="filled" onChange={handleItemTime} />

            <Link to='/'><Button  type="submit" onClick={handleClick} style={{marginTop: '40px', width: '400px'}} variant="contained">Submit</Button></Link>
        </FormControl>
        </div>
    )
}