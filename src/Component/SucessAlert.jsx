import {Snackbar,Alert} from '@mui/material'

export default function SuccessAlert({open,handleclose,sucessalert}){
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleclose} >
           <Alert
            onClose={handleclose}
            severity={sucessalert?.severity}
            variant='filled'
            sx={{width:'100%'}}
           >
           {sucessalert?.message}
           </Alert>
        </Snackbar>
    )
}