import { NextResponse } from 'next/server'

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    const q = searchParams.get('q');
    const mediaType = searchParams.get('mediaType');
    const includeAdult = searchParams.get('includeAdult');

    const url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${process.env.TMDB_API_KEY}&query=${q}&include_adult=${includeAdult}`;
    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data);
}
