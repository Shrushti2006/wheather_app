import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function WeatherInfo({info}) {

  const INIT_URL = "https://images.unsplash.com/photo-1755804457512-db80daccf359?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL="https://images.unsplash.com/photo-1678421704898-ca4a54e8fc41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U1VNTUVSJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL="https://media.istockphoto.com/id/1181599019/photo/empty-panoramic-winter-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=E8kZ7W9nBf9gnsz9l9LBIiDs_2jiOPcWlkaMQATFEvI=";
  const RAIN_URL="https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UkFJTlklMjBXRUFUSEVSfGVufDB8fDB8fHww";
  return (
    <div>
      <h3>Weather Info</h3>

      <Card sx={{ maxWidth: 600 }}>
        <CardActionArea>
           
          <CardMedia
            component="img"
            width="250"
            height="230"
            image={
                info.humidity>80 
                ? RAIN_URL :
                 info.temp> 15 
                ? HOT_URL
                 : COLD_URL
            }
            alt="weather image"
          />

          <CardContent>
            
            <Typography gutterBottom variant="h5" component="div">{info.city}</Typography>
            <Typography variant="body2" color="text.secondary">
                {info.humidity>80 
                ? (<ThunderstormIcon/>) :
                 info.temp> 15 
                ? (< SunnyIcon/>)
                 : (<AcUnitIcon/>)
                }<br></br>
              Temperature: {info.temp}°C <br /><br/>
              Feels Like: {info.feelsLike}°C <br /><br/>
              Min: {info.tempMin}°C / Max: {info.tempMax}°C <br /><br/>
              Humidity: {info.humidity}%
            </Typography>
            <Typography gutterBottom variant="h6" component="div">{info.weather}</Typography>
            

          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
