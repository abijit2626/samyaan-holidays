import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { destination, duration, style, guests, email } = body;

    // TODO: Integrate with OpenRouter / Gemini API
    // const apiKey = process.env.OPENROUTER_API_KEY;

    // Static Mock Response for Demonstration
    const mockContent = `
      # Bespoke ${style} Journey to ${destination}
      
      ## Overview
      A refined ${duration}-day experience for ${guests} traveler(s).
      
      ## Daily Highlights
      - **Day 1**: Arrival & Private Transfer to Artisan Villa. Sunset dinner at the Marina.
      - **Day 2**: Curated Heritage Walk and Private Art Gallery Tour.
      - **Day 3**: Gastronomy Masterclass with a Michelin-starred chef.
      
      *Full itinerary has been sent to ${email}.*
    `;

    return NextResponse.json({ 
      success: true, 
      content: mockContent,
      message: "Itinerary generated successfully" 
    });

  } catch (error) {
    console.error('AI_ERROR:', error);
    return NextResponse.json({ 
      success: false, 
      message: "Failed to generate itinerary" 
    }, { status: 500 });
  }
}
