import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Link,
  IconButton
} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#1B5E20',
        color: 'white',
        py: 4,
        px: { xs: 2, md: 8 },
        mt: 6
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        flexWrap="wrap"
      >
        {/* Logo and Tagline */}
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Saylani Microfinance
          </Typography>
          <Typography variant="body2" mt={1}>
            Empowering communities through interest-free loans.
          </Typography>
        </Box>

        {/* Links */}
        <Stack direction="row" spacing={3} mt={{ xs: 3, md: 0 }}>
          <Link href="#" underline="hover" color="inherit">Home</Link>
          <Link href="#" underline="hover" color="inherit">About</Link>
          <Link href="#" underline="hover" color="inherit">Loan Categories</Link>
          <Link href="#" underline="hover" color="inherit">Calculator</Link>
          <Link href="#" underline="hover" color="inherit">Contact</Link>
        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={1} mt={{ xs: 3, md: 0 }}>
          <IconButton href="#" target="_blank" sx={{ color: 'white' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton href="#" target="_blank" sx={{ color: 'white' }}>
            <YouTubeIcon />
          </IconButton>
          <IconButton href="#" target="_blank" sx={{ color: 'white' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href="#" target="_blank" sx={{ color: 'white' }}>
            <TwitterIcon />
          </IconButton>
        </Stack>
      </Stack>

      {/* Bottom Text */}
      <Typography variant="caption" display="block" textAlign="center" mt={4} color="grey.300">
        © {new Date().getFullYear()} Saylani Welfare International Trust. All rights reserved.
      </Typography>
    </Box>
  );
}
