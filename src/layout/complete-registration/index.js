import { useState } from 'react';

import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router';

import { Box, Button, Grid, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Logo from 'components/logo';
import AuthBackground from 'assets/images/auth/AuthBackground';
import AuthFooter from 'components/cards/AuthFooter';
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';

export default function CompleteRegistration() {
  // const [company, setCompany] = useState({
  //   city: '',
  //   country: '',
  //   companyName: '',
  //   nuit: '',
  //   sectorOfWork: ''
  // });

  const { user } = useAuth();
  const [active, setActive] = useState('');

  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AuthBackground />
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{
          minHeight: '100vh'
        }}
      >
        <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
          >
            <Grid item>
              <MainCard
                sx={{
                  maxWidth: { xs: 400, lg: 600 },
                  margin: { xs: 2.5, md: 3 },
                  '& > *': {
                    flexGrow: 1,
                    flexBasis: '50%'
                  }
                }}
                content={false}
                border={false}
                boxShadow
                shadow={theme.customShadows.z1}
              >
                <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                  <Stack spacing={1}>
                    <Typography variant="h3">
                      Hi <span style={{ color: '#3a86ff' }}>{user.name}</span>, we&apos;re almost there!
                    </Typography>
                    <Typography variant="body1">We just need to setup a few more things!</Typography>
                  </Stack>

                  <Stack spacing={2} sx={{ mt: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 500 }}>
                      Account Information
                    </Typography>
                  </Stack>
                  <Typography variant="caption">Enter Your Account Details</Typography>

                  <Box sx={{ mt: 2 }}>
                    <Grid direction="row" container spacing={2}>
                      <Grid item sx={{ width: '33.33%' }}>
                        <button
                          style={{
                            border: active === 'Supplier' ? '1px solid #3a86ff' : '1px solid #e6e9eb',
                            padding: 10,
                            borderRadius: 5,
                            background: 'white',
                            height: 140,
                            cursor: 'pointer'
                          }}
                          onClick={function () {
                            setActive('Supplier');
                          }}
                        >
                          <Stack spacing={1}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              I am a Supplier
                            </Typography>
                            <Typography variant="body2">I want to submit invoices and get a financing to pay it later.</Typography>
                          </Stack>
                        </button>
                      </Grid>
                      <Grid item sx={{ width: '33.33%' }}>
                        <button
                          style={{
                            border: active === 'Buyer' ? '1px solid #3a86ff' : '1px solid #e6e9eb',
                            padding: 10,
                            borderRadius: 5,
                            background: 'white',
                            height: 140,
                            cursor: 'pointer'
                          }}
                          onClick={function () {
                            setActive('Buyer');
                          }}
                        >
                          <Stack spacing={1}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              I am a Buyer
                            </Typography>
                            <Typography variant="body2">
                              I want to validate an invoice and so I can receive my service as agreed.
                            </Typography>
                          </Stack>
                        </button>
                      </Grid>
                      <Grid item sx={{ width: '33.33%' }}>
                        <button
                          style={{
                            border: active === 'Funder' ? '1px solid #3a86ff' : '1px solid #e6e9eb',
                            padding: 10,
                            borderRadius: 5,
                            background: 'white',
                            height: 140,
                            cursor: 'pointer'
                          }}
                          onClick={function () {
                            setActive('Funder');
                          }}
                        >
                          <Stack spacing={1}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              I am a Funder
                            </Typography>
                            <Typography variant="body2">
                              I want to invest in invoices by knowing the invoices are going to be paid.
                            </Typography>
                          </Stack>
                        </button>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item sx={{ width: '50%' }}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor="city">City</InputLabel>
                          <OutlinedInput placeholder="City" fullWidth id="city" type="city" name="city" />
                        </Stack>
                      </Grid>
                      <Grid item sx={{ width: '50%' }}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor="country">Country</InputLabel>
                          <OutlinedInput placeholder="Country" fullWidth id="country" type="country" name="country" />
                        </Stack>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 1 }}>
                      <Grid item sx={{ width: '50%' }}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor="company-name">Company Name</InputLabel>
                          <OutlinedInput placeholder="Company Name" fullWidth id="company-name" type="company-name" name="company-name" />
                        </Stack>
                      </Grid>
                      <Grid item sx={{ width: '50%' }}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor="nuit-tax-id">N.U.I/Tax ID</InputLabel>
                          <OutlinedInput placeholder="N.U.I/Tax ID" fullWidth id="nuit-tax-id" type="nuit-tax-id" name="nuit-tax-id" />
                        </Stack>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 1 }}>
                      <Grid item sx={{ width: '100%' }}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor="business-sector">Business Sector</InputLabel>
                          <OutlinedInput
                            placeholder="Business Sector"
                            fullWidth
                            id="business-sector"
                            type="business-sector"
                            name="business-sector"
                          />
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>

                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12}>
                      <AnimateButton>
                        <Button
                          onClick={function () {
                            navigate('/dashboard/analytics', { replace: true });
                          }}
                          disableElevation
                          fullWidth
                          size="large"
                          variant="contained"
                          color="primary"
                        >
                          Save
                        </Button>
                      </AnimateButton>
                    </Grid>
                  </Grid>
                </Box>
              </MainCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </Box>
  );
}
