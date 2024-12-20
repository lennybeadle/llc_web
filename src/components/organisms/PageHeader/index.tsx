import { Box, Link, List, Typography } from '@mui/material';
import HeaderItem from '../../atoms/HeaderItem';
import * as S from './styles';
import LogoIcon from '../../../assets/images/logos/logo.png';

export function PageHeader() {
  return (
    <S.HeaderWrapper>
      <S.Wrapper>
        {/* Logo Section */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">LLC</Typography>
            <Typography variant="h6" sx={{ fontWeight: '300' }}>
              Tech
            </Typography>
          </Box>
          <S.StyledLogo src={LogoIcon} alt="Logo" title="Logo" />
          <Box>
            <Typography variant="body1">Delivering on Promises</Typography>
          </Box>
        </Box>

        {/* Navigation Section */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <nav>
            <List sx={{ display: 'flex', padding: 0, margin: 0 }}>
              <HeaderItem name="Home" link="/" />
              <HeaderItem name="Services" link="/" />
              <HeaderItem name="About" link="/" />
              <HeaderItem name="Blog" link="/" />
              <HeaderItem name="Contract" link="/" />
            </List>
          </nav>
        </Box>

        {/* Call-to-Action Section */}
        <Box>
          <S.StyledLoginButton>Login</S.StyledLoginButton>
          <S.StyledButton>Get in Touch</S.StyledButton>
        </Box>
      </S.Wrapper>
    </S.HeaderWrapper>
  );
}

export default PageHeader;
