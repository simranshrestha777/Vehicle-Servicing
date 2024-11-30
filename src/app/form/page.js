"use client";
import { Button, TextField } from "@mui/material";

export default function SimpleForm() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "20px" }}>
            <TextField label="Name" variant="outlined" />
            <TextField label="Email" variant="outlined" />
            <TextField label="Message" variant="outlined" multiline rows={4} />
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </div>
    );
}
