import React from 'react';
import {QrScanner} from '@yudiel/react-qr-scanner';
import {Alert, AlertTitle, Box, Button, Modal, Typography} from "@mui/material";


function App() {

    const [open, setOpen] = React.useState(false);
    const [isResultPresent, setResultPresent] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = React.useState('');
    const [postName, setPostName] = React.useState('');
    const [matricule, setMatricule] = React.useState('');
    const [title, setTitle] = React.useState('');

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const styles = {
        container: {
            width: 400,
            margin: 'auto'
        }
    };

    const uids = [
        'xqByPg9AeSnyobNfEA5hgM3nb7Eya6kC9S',
        'ALBPpPexHTGz8cj3mkEtnJ5YnoipBKq5sA'
    ]

    const onScan = (res: any) => {
        if (res === uids[0]) {
            setName("Nom : Kasongo")
            setPostName("Postnom : Badibanga")
            setMatricule("Matricule : 12.23.654")
            setTitle("Grade : Directeur")
            setResultPresent(true)
            handleOpen()
        } else if (res === uids[1]) {
            setName("Nom : Ngoie")
            setPostName("Postnom : Kabongola")
            setMatricule("Matricule : 32.23.654")
            setTitle("Grade : Secrétaire")
            setResultPresent(true)
            handleOpen()
        } else {
            setName("Aucun résultat n'a été trouvé !")
            setPostName("")
            setMatricule("")
            setTitle("")
            setResultPresent(false)
            handleOpen()
        }
    }

    const onError = (error: any) => {

    }


    return (
        <div style={styles.container}>
            <h2>QR Code Scanner</h2>
            <QrScanner onDecode={onScan} onError={onError}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >

                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">Résultat du scan</Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        { isResultPresent && <ul>
                            <li>{name}</li>
                            <li>{postName}</li>
                            <li>{matricule}</li>
                            <li>{title}</li>
                        </ul> }
                        { !isResultPresent && <p>{name}</p>}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default App;
