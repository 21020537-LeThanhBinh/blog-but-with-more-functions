import { google } from 'googleapis'
import { NextResponse } from 'next/server';

export async function POST(request: Request, { params }: { params: { email: string } }) {
  try {
    const email = params.email

    const auth = await google.auth.getClient({
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      },
    });
    const sheets = google.sheets({ version: 'v4', auth });

    const range = `Sheet1!A1:A100`;
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
    });

    const nextRow = response.data.values!.length + 1
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.SHEET_ID,
      range: `Sheet1!A${nextRow}`,
      requestBody: {
        values: [[email]],
      },
      valueInputOption: 'USER_ENTERED'
    })

    return NextResponse.json({ email: email }, { status: 200 });
  } catch (error) {

    console.log(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
