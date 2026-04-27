import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { destination, duration, style, guests, email } = body;

    // 1. Capture Lead in Supabase
    const { error: leadError } = await supabase
      .from('leads')
      .insert([
        { 
          email, 
          destination_interest: destination,
          metadata: { style, duration, guests }
        }
      ]);

    if (leadError) console.error('SUPABASE_LEAD_ERROR:', leadError);

    // 2. Generate Mock/AI Response
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

    // 3. Log AI Request
    await supabase.from('ai_requests').insert([
      {
        user_email: email,
        request_params: { destination, duration, style, guests },
        response_content: mockContent
      }
    ]);

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
