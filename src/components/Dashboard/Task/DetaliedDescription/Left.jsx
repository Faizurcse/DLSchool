import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Tabs,
  Tab,
  IconButton,
  Link,
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

function LeftSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', 
        overflow: 'hidden', 
        p: 2,
        gap: 2,
      }}
    >
      {/* Description Section */}
      <Box
        sx={{
          flex: 1,
          p: 2,
          bgcolor: '#fff',
          borderRadius: 1,
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
          DESCRIPTION
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          It will be as simple as Occidental in fact, it will be Occidental. To an English person, it will seem like
          simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European
          languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc.,
          Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation, and their
          most common words.
        </Typography>
      </Box>

      {/* Comments Section */}
      <Box
        sx={{
          flex: 4, 
          p: 2,
          bgcolor: '#fff',
          borderRadius: 1,
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* Comments Header */}
        <Tabs value={0} textColor="primary" indicatorColor="primary">
          <Tab label="Comments (5)" sx={{ fontWeight: 600 }} />
        </Tabs>

        {/* Comments Content */}
        <Box sx={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Comment 1 */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#1976d2' }}>TT</Avatar>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>Thomas Taylor</Typography>
              <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                24 Dec 2021 - 05:20PM
              </Typography>
              <Typography sx={{ mt: 1 }}>
                If you have further questions, please contact Customer Support from the “Action Menu” on your{' '}
                <Link href="#" underline="hover" color="primary">
                  Online Order Support
                </Link>
                .
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{ mt: 1, textTransform: 'none', fontSize: '0.8rem' }}
              >
                Reply
              </Button>
            </Box>
          </Box>

          {/* Comment 2 */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#4caf50' }}>TN</Avatar>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>Tonya Noble</Typography>
              <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                26 min ago
              </Typography>
              <Typography sx={{ mt: 1 }}>
                Your{' '}
                <Link href="#" underline="hover" color="primary">
                  Online Order Support
                </Link>{' '}
                provides you with the most current status of your order. To help manage your order, refer to the “Action
                Menu” to initiate a return, contact Customer Support, and more.
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{ mt: 1, textTransform: 'none', fontSize: '0.8rem' }}
              >
                Reply
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Add Comment Section */}
        <Box
          sx={{
            flex: 0.5, 
            p: 2,
            bgcolor: '#fff',
            borderRadius: 1,
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Leave a Comment
          </Typography>
          <TextField
            placeholder="Enter comments"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            sx={{
              mb: 2,
              bgcolor: '#f8f9fa',
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                '& fieldset': {
                  borderColor: '#ced4da',
                },
                '&:hover fieldset': {
                  borderColor: '#adb5bd',
                },
              },
            }}
          />
          <Box display="flex" width="100%" gap={2} justifyContent="end" alignItems="center">
            <IconButton color="primary">
              <AttachFileIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: 'none', fontWeight: 600 }}
              endIcon={<SendIcon />}
            >
              Post Comment
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LeftSection;
