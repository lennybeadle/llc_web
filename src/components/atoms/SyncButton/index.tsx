import { Button, Grid, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
interface SyncButtonProps {
  text: string;
  handleSync: () => void;
}
const SyncButton: React.FC<SyncButtonProps> = ({ text, handleSync }) => {
  return (
    <Button
      sx={{
        border: '1px solid #c2c8d0',
        borderRadius: '6px',
        fontSize: '16px',
        width: '250px',
        transition: 'all 0.3s ease-in-out', // Smooth transition
        '&:hover': {
          borderColor: '#3f51b5', // Change border color
          backgroundColor: '#f0f4ff', // Light background on hover
          transform: 'translateY(-2px)', // Slight lift effect
        },
      }}
      onClick={handleSync}
    >
      <Grid
        container
        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Grid xs={1} />
        <Grid
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
          xs={1}
        >
          <GoogleIcon />
        </Grid>
        <Grid item xs={9} sx={{ textAlign: 'left' }}>
          <Typography variant="body2" component="div">
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
};

export default SyncButton;
