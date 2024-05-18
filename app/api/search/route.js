import { NextResponse } from 'next/server';
import tmdbClient from '../../../lib/tmdbClient';

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    const q = searchParams.get('q');
    const mediaType = searchParams.get('mediaType');
    const includeAdult = searchParams.get('includeAdult');

    const { data } = await tmdbClient.get(`/search/${mediaType}?query=${q}&include_adult=${includeAdult}`);

    return NextResponse.json(data);
}
