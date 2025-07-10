import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { google } from 'googleapis';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Load your service account credentials
const credentials = JSON.parse(fs.readFileSync('credentials.json'));
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: SCOPES,
});
const sheets = google.sheets({ version: 'v4', auth });

// Your Google Sheet ID and range
const SPREADSHEET_ID = '1J_1Aw1II7dwqQnqCmcKM5WNsJz0z0Bwquj4hstYBcEU';
const SHEET_NAME = 'Form Responses 1'; // Make sure this matches your tab name exactly

app.post('/api/admission', async (req, res) => {
  const { name, number, classVal } = req.body;
  if (!name || !number || !classVal) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }
  try {
    // Append the new row to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:C`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, number, classVal]],
      },
    });
    res.json({ success: true, message: 'Admission received and saved to Google Sheets!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to save to Google Sheets.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 