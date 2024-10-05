import { supabase } from '@/lib/supabaseclient';
import { NextResponse } from 'next/server';

// Named export for the GET method
export async function GET(req: Request) {
  try {
    // Fetch the URLs from Supabase (replace 'BlogImage' with your actual table name)
    const { data, error } = await supabase
      .from('BlogImage') // Ensure this is the correct table name
      .select('url');

    // If there's an error, return 500 with the error message
    if (error) {
      console.error("Error fetching from Supabase:", error);
      return NextResponse.json({ message: 'Failed to fetch image URLs', error }, { status: 500 });
    }

    // If no data is found, return an empty array
    if (!data || data.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    // Return the fetched data
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error in API handler:", error);
    return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
  }
}
