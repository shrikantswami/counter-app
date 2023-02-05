import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
   
  return (<>
    <Card   sx={{  padding: 0 ,paddingLeft:0.1,width:945 , display:'flex' ,boxShadow: 0,paddingBottom:0.1}}>
      <Card sx={{  padding: 0,width:750 , display:'flex', boxShadow: 1}} >
        <CardContent sx={{ padding:0, width :300, height:46.5}}>
          <Typography sx={{ fontSize: 14 ,textAlign:'left',  height:46.5 ,paddingTop:1, paddingLeft:2,paddingBottom:1,paddingRight:2}} color="text.primary" >
            Product Name
          </Typography>
        </CardContent>
        <CardContent sx={{ padding:0, width :80, height:46.5, boxShadow: 1}}>
          <Typography sx={{ fontSize: 14 ,textAlign:'centre',  height:46.5 ,paddingTop:1, paddingLeft:2,paddingBottom:1,paddingRight:2}} color="text.primary" >
            Price
          </Typography>
        </CardContent>
        <CardContent sx={{ padding:0, width :200, height:46.5, boxShadow: 1}}>
          <Typography sx={{ fontSize: 14 ,textAlign:'centre',  height:46.5 ,paddingTop:1, paddingLeft:2,paddingBottom:1,paddingRight:2}} color="text.primary" >
            Quantity
          </Typography>
        </CardContent>
        <CardContent sx={{ padding:0, width :100, height:46.5}}>
          <Typography sx={{ fontSize: 14 ,textAlign:'left',  height:46.5 ,paddingTop:1, paddingLeft:2,paddingBottom:1,paddingRight:2}} color="text.primary" >
            Volume
          </Typography>
        </CardContent>
        <CardContent sx={{ padding:0, width :170, height:46.5, boxShadow: 1}}>
          <Typography sx={{ fontSize: 14 ,textAlign:'centre',  height:46.5 ,paddingTop:1, paddingLeft:2,paddingBottom:1,paddingRight:2}} color="text.primary" >
            Action
          </Typography>
        </CardContent>
        
      </Card>
    </Card>
  <Card   sx={{  padding: 0 ,paddingLeft:0.1,width:943.33 , display:'flex' ,boxShadow: 0,paddingBottom:0.1}}>
    <Card sx={{  padding: 0,width:750 , display:'flex', boxShadow: 1}} >
      <CardContent sx={{ padding:0, width :300, height:46.5}}>
        <Typography sx={{ fontSize: 14 ,textAlign:'left',  height:46.5 ,paddingTop:1, paddingLeft:2,paddingBottom:1,paddingRight:2}} color="text.primary" >
          Azethromisin
        </Typography>
      </CardContent>
      <CardContent sx={{ padding:0, width :80, height:46.5, boxShadow: 1}}>
        <Typography sx={{ fontSize: 14 ,textAlign:'centre',  height:46.5 ,paddingTop:1, paddingLeft:2,paddingBottom:1,paddingRight:2}} color="text.primary" >
          100
        </Typography>
      </CardContent>

      <CardActions sx={{width:152 , height:46.5 }}>
          <Button  sx={{padding:0,minWidth:30,height:25}} size="small" variant='outlined'>-</Button> 
            <Typography sx={{ fontSize: 14 ,textAlign:'centre', width:25, height:46.5 ,paddingTop:1.75, paddingLeft:2,paddingRight:2}} color="text.primary" >
              6
            </Typography>
            {/* {/* <div margin='1px'>6</div> *} */}
          <Button  sx={{padding:0,minWidth:30,height:25}} size="small" variant='outlined'>+</Button>   
      </CardActions>
      <CardContent sx={{ padding:0, width :35, height:46.5, boxShadow: 1}}>
        <Typography sx={{ fontSize: 14 ,textAlign:'centre',  height:46.5 ,paddingTop:2}} color="text.primary" >
          12
        </Typography>
      </CardContent>
            <CardActions sx={{width:150}}>
              <Button size="small" variant='outlined'>Add To Basket</Button>  
            </CardActions>
      </Card>
  </Card>
    <Card sx={{ padding:0 ,width:750, display:'flex'}}>
      <CardContent sx={{ padding:0 , width :600, height:46.5}}>
        <Typography sx={{ fontSize: 14 ,textAlign:'left',  height:46.5 ,paddingTop:1, paddingLeft:2,paddingBottom:1,paddingRight:2}} color="text.primary" gutterBottom>
          Pens
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" variant='outlined'>Add To Basket</Button>
      </CardActions>
    </Card>
    </>
  );
}