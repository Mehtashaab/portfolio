import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Message, { IMessage } from '@/models/Message';

export async function POST(request: Request): Promise<Response> {
  try {
    // Connect to the database
    await dbConnect();

    // Parse request data
    const data = await request.json();
    const { name, email, message } = data as Pick<IMessage, 'name' | 'email' | 'message'>;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Save the message to the database
    const newMessage = await Message.create({ name, email, message });

    return NextResponse.json({
      message: 'Message sent successfully!',
      data: newMessage,
    });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
