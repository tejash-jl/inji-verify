import React from 'react';
import {Grid, Typography} from "@mui/material";
import StyledButton from "../Home/VerificationSection/commons/StyledButton";
import {useNavigate} from "react-router-dom";

function SomethingWentWrong(props: any) {
    const navigate = useNavigate();
    return (
        <Grid container style={{
            display: 'grid',
            placeContent: 'center',
            height: '540px',
            margin: '28px auto',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 2px 5px #0000001A',
            borderRadius: '10px',
            textAlign: 'center',
            width: '90%'
        }}>
            <Grid item xs={12}>
                <img src={'/assets/images/under_construction.svg'} width={372} style={{margin: '30px auto'}}/>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant={'h6'}
                    style={{
                    font: 'normal normal 500 24px/29px Inter',
                    color: '#2C2C2C', margin: '5px auto'
                }}>
                    No Internet Connection!
                </Typography>
                <Typography style={{
                    font: 'normal normal normal 14px/20px Inter',
                    color: '#7B7B7B',
                    margin: '5px auto'
                }}>
                    Oops! We can’t seem to connect. Check your internet connection and try again.
                </Typography>
                <StyledButton
                    style={{margin: '30px auto'}}
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Please try again
                </StyledButton>
            </Grid>
        </Grid>
    );
}

export default SomethingWentWrong;
